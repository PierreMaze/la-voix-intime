migrate(
  // ── UP ────────────────────────────────────────────────────────────────────
  (app) => {

    // ── users — modification de la collection auth existante ─────────────────
    const users = app.findCollectionByNameOrId("users");

    users.listRule   = '@request.auth.role = "admin"';
    users.viewRule   = '@request.auth.id = id || @request.auth.role = "admin"';
    users.createRule = "";
    users.updateRule = "@request.auth.id = id";
    users.deleteRule = "@request.auth.id = id";

    // Ajouter les champs manquants s'ils n'existent pas encore
    const hasName = users.fields.getByName("name");
    if (!hasName) {
      users.fields.add(new TextField({ name: "name", required: false }));
    }
    const hasRole = users.fields.getByName("role");
    if (!hasRole) {
      users.fields.add(new SelectField({
        name: "role",
        required: true,
        values: ["admin", "student"],
        maxSelect: 1,
      }));
    }

    app.save(users);

    // ── formations ───────────────────────────────────────────────────────────
    const formations = new Collection({
      type: "base",
      name: "formations",
      listRule:   'published = true || @request.auth.role:each ?= "admin"',
      viewRule:   'published = true || @request.auth.role:each ?= "admin"',
      createRule: '@request.auth.role:each ?= "admin"',
      updateRule: '@request.auth.role:each ?= "admin"',
      deleteRule: '@request.auth.role:each ?= "admin"',
      fields: [
        { type: "text",   name: "title",       required: true },
        { type: "text",   name: "description", required: false },
        { type: "number", name: "price",       required: false, min: 0 },
        {
          type: "file",
          name: "thumbnail",
          required: false,
          maxSelect: 1,
          mimeTypes: ["image/jpeg", "image/png", "image/webp"],
        },
        { type: "bool", name: "published", required: false },
      ],
    });
    app.save(formations);

    // ── lessons ──────────────────────────────────────────────────────────────
    const lessons = new Collection({
      type: "base",
      name: "lessons",
      listRule:   '@request.auth.id != ""',
      viewRule:   '@request.auth.id != ""',
      createRule: '@request.auth.role:each ?= "admin"',
      updateRule: '@request.auth.role:each ?= "admin"',
      deleteRule: '@request.auth.role:each ?= "admin"',
      fields: [
        {
          type: "relation",
          name: "formation_id",
          required: true,
          collectionId: formations.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { type: "text",   name: "title",     required: true },
        { type: "text",   name: "content",   required: false },
        { type: "url",    name: "video_url", required: false },
        { type: "number", name: "order",     required: false, min: 0 },
      ],
    });
    app.save(lessons);

    // ── purchases ────────────────────────────────────────────────────────────
    const purchases = new Collection({
      type: "base",
      name: "purchases",
      listRule:   '@request.auth.id = user_id || @request.auth.role:each ?= "admin"',
      viewRule:   '@request.auth.id = user_id || @request.auth.role:each ?= "admin"',
      createRule: '@request.auth.role:each ?= "admin"',
      updateRule: '@request.auth.role:each ?= "admin"',
      deleteRule: '@request.auth.role:each ?= "admin"',
      fields: [
        {
          type: "relation",
          name: "user_id",
          required: true,
          collectionId: users.id,
          cascadeDelete: false,
          maxSelect: 1,
        },
        {
          type: "relation",
          name: "formation_id",
          required: true,
          collectionId: formations.id,
          cascadeDelete: false,
          maxSelect: 1,
        },
        { type: "date", name: "purchased_at", required: false },
        { type: "text", name: "payment_ref",  required: false },
      ],
    });
    app.save(purchases);

    // ── progress ─────────────────────────────────────────────────────────────
    const progress = new Collection({
      type: "base",
      name: "progress",
      listRule:   "@request.auth.id = user_id",
      viewRule:   "@request.auth.id = user_id",
      createRule: "@request.auth.id = user_id",
      updateRule: "@request.auth.id = user_id",
      deleteRule: "@request.auth.id = user_id",
      fields: [
        {
          type: "relation",
          name: "user_id",
          required: true,
          collectionId: users.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        {
          type: "relation",
          name: "lesson_id",
          required: true,
          collectionId: lessons.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { type: "bool", name: "completed",    required: false },
        { type: "date", name: "completed_at", required: false },
      ],
    });
    app.save(progress);
  },

  // ── DOWN (rollback) ────────────────────────────────────────────────────────
  (app) => {
    for (const name of ["progress", "purchases", "lessons", "formations"]) {
      try {
        const col = app.findCollectionByNameOrId(name);
        app.delete(col);
      } catch (_) {}
    }
  }
);
