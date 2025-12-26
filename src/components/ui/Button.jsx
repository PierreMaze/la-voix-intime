const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as = 'button',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform inline-block text-center';

  const variants = {
    primary: 'text-white bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 hover:scale-105',
    outline: 'border text-violet-50 border-violet-50 hover:bg-white hover:text-violet-900 hover:border-violet-300 hover:scale-105',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
  };

  const Component = as;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
