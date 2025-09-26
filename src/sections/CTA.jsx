

const CTA = () => {
  return (
    <section id="cta" className="bg-surface py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block px-8 py-10 rounded-2xl shadow-glow-purple bg-white">
          <h3 className="font-montserrat text-2xl text-textPrimary">Ready to scale your brand with invisible efficiency?</h3>
          <p className="mt-2 text-textSecondary">Get a free 15‑minute consult. No pressure, clear next steps.</p>
          <a href="/api/contact/start" className="btn-cta mt-6 inline-block rounded-lg p-1">Book a Call</a>
        </div>
      </div>
    </section>
  )
}

export default CTA


