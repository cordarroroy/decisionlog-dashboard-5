export default function RootPage() {
  return (
    <>
      <header style={{padding: '24px 0', borderBottom: '1px solid #f3f4f6'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontSize: '24px', fontWeight: '800', color: '#1f2937'}}>DecisionLog</div>
          <ul style={{display: 'flex', gap: '40px', listStyle: 'none'}}>
            <li><a href="#problem" style={{textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '14px'}}>Why</a></li>
            <li><a href="#features" style={{textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '14px'}}>How</a></li>
            <li><a href="#pricing" style={{textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '14px'}}>Pricing</a></li>
          </ul>
        </div>
      </header>

      <section style={{padding: '120px 0 80px', textAlign: 'center'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <h1 style={{fontSize: '64px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px', color: '#1f2937'}}>Stop losing decisions to Slack history</h1>
          <p style={{fontSize: '20px', color: '#6b7280', marginBottom: '48px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>Log. Search. Learn. Build better products together.</p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog" style={{padding: '16px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer', background: '#1f2937', color: 'white'}}>Add to Slack for free</a>
            <a href="/login" style={{padding: '16px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', border: '2px solid #475569', background: 'white', color: '#1f2937', cursor: 'pointer'}}>Join Beta</a>
          </div>
        </div>
      </section>
    </>
  )
}
