import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  to,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-navy-700 text-white hover:bg-navy-900 focus:ring-navy-700',
    secondary: 'bg-gold text-navy-900 hover:bg-yellow-600 focus:ring-gold',
    outline: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white focus:ring-navy-700',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;