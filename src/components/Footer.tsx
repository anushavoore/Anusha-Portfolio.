export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {currentYear} Anusha Voore</span>
          <span>Saint Louis, Missouri</span>
        </div>
      </div>
    </footer>
  );
};
