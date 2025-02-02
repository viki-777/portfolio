

const Footer = () => {
 

  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-6">
        {/* Left Section */}
        <div className="text-sm text-gray-500 space-y-1 text-center md:text-left">
          <p>Made with 💚 by Vikash</p>
          <p>© {new Date().getFullYear()} All rights are Reserved</p>
        </div>

        
 
      </div>
    </footer>
  );
};

export default Footer;
