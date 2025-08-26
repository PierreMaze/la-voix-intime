export const Button = ({
  children,
  variant = "primary",
  undefinede = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-purple-600 hover:bg-white hover:text-purple-900 text-white shadow-lg shadow-purple-600/25 hover:shadow-gray-200/50",
    secondary:
      "bg-slate-700 hover:bg-white hover:text-purple-900 text-white shadow-lg shadow-slate-700/25 hover:shadow-gray-200/50",
    outline:
      "border border-purple-50 text-purple-50 hover:bg-white hover:text-purple-900 hover:border-purple-300",
    yellow:
      "relative bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25 overflow-hidden group",
  };

  return (
    <button
      className={`${baseClasses}${variants[variant]}${className}`}
      {...props}>
      {variant === "yellow" && (
        <div className="absolute inset-0 bg-white transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0"></div>
      )}
      <span
        className={`relative z-10 ${
          variant === "yellow"
            ? "group-hover:text-purple-900 transition-colors duration-300"
            : ""}`}>
        {children}
      </span>
    </button>
  );
};
