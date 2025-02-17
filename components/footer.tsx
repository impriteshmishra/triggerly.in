
export const Footer = () => {
  return (
    <footer className=" text-black py-16 text-center md:text-md lg:text-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex space-x-2 mb-6 items-center justify-center">
           
            <span className="text-xl font-bold ">Triggerly</span>
          </div>
          <p className="text-gray-400">
            Automation for the modern web.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>Templates</li>
            <li>Integrations</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

