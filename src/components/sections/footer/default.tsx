export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm text-zinc-400">
            xenstresser.su best stress testing service. All rights reserved. &copy; {new Date().getFullYear()} XennStress
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
