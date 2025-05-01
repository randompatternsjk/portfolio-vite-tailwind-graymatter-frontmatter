export const MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold mb-6 mt-8 text-red-800" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl font-bold mb-4 mt-6" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-1xl font-semibold mb-3 mt-5" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="!text-lg mb-4 leading-relaxed text-red-900" {...props}>
      {children}
    </p>
  ),
  img: ({ src, alt, ...props }) => (
    <div className="my-6">
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-md mx-auto"
        {...props}
      />
    </div>
  ),
};