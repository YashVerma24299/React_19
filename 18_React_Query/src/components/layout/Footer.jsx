function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
      </div>
    </footer>
  );
}

export default Footer;
