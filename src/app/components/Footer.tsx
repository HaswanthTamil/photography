export default function Footer() {
  return (
    <footer id="contact" className="bg-surface-container-highest border-t border-outline-variant px-[20px] md:px-[80px] py-[104px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="font-headline-lg text-[28px] text-primary mb-8 tracking-tighter">ARCHITECTON</div>
          <p className="font-body-md text-on-surface-variant max-w-xs leading-relaxed">
            Crafting timeless environments through a rigorous process of investigation and making.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Studio</span>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/portfolio">Portfolio</a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/approach">Approach</a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/services">Services</a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/journal">Journal</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Connect</span>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Instagram</a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">LinkedIn</a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Journal</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Contact</span>
          <p className="font-body-md text-on-surface-variant leading-relaxed">Seefeldstrasse 124<br />8008 Zürich, Switzerland</p>
          <a className="font-body-md text-secondary border-b border-secondary pb-0.5 w-fit hover:text-primary hover:border-primary transition-colors" href="mailto:studio@architecton.com">
            studio@architecton.com
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-outline-variant mt-20 pt-10 gap-6">
        <p className="font-body-md text-on-surface-variant">© 2024 Architecton Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="font-label-md text-[11px] uppercase tracking-[0.12em] text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
          <a className="font-label-md text-[11px] uppercase tracking-[0.12em] text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
