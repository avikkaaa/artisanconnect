import React, { useState } from 'react';
import AppMarketplace from './AppMarketplace';
import './reference-home.css';

const copy = {
  en: {
    explore: 'Explore Crafts',
    ai: 'AI Tools',
    stories: 'Stories',
    about: 'About',
    login: 'Login',
    artist: "I'm an Artist",
    buyer: "I'm a Buyer",
    eyebrow: "INDIA'S CRAFT, CONNECTED",
    title1: 'Where',
    title2: 'heritage',
    title3: 'finds its next',
    title4: 'chapter.',
    description: 'A warm, intelligent marketplace helping artisans turn generations of craft into discoverable, market-ready stories.',
    aiInsight: 'AI Insight',
    ready: 'Craft story ready',
    handwoven: 'HANDWOVEN',
    storiesWord: 'STORIES',
    from: 'From the hands of',
    artisans: 'Indian Artisans',
    seeAi: 'See how AI helps',
    sectionTitle: 'One platform. Many art forms.',
    sectionText: 'Discover handmade work, meet the people behind it, and help traditional craft find its next chapter.'
  },
  hi: {
    explore: 'शिल्प देखें', ai: 'AI टूल्स', stories: 'कहानियाँ', about: 'हमारे बारे में', login: 'लॉगिन', artist: 'मैं एक कलाकार हूँ', buyer: 'मैं खरीदार हूँ',
    eyebrow: 'भारत का शिल्प, एक साथ', title1: 'जहाँ', title2: 'विरासत', title3: 'अपना अगला', title4: 'अध्याय पाती है।',
    description: 'एक सरल और बुद्धिमान बाज़ार जो कारीगरों की पीढ़ियों पुरानी कला को नई पहचान और बाज़ार तक पहुँच देता है।', aiInsight: 'AI सुझाव', ready: 'शिल्प कहानी तैयार', handwoven: 'हाथ से बुनी', storiesWord: 'कहानियाँ', from: 'इन हाथों से', artisans: 'भारतीय कारीगर', seeAi: 'देखें AI कैसे मदद करता है', sectionTitle: 'एक मंच। अनेक कला रूप।', sectionText: 'हस्तनिर्मित कला खोजें, कारीगरों से जुड़ें और परंपरागत शिल्प को नई पहचान दें।'
  },
  bn: {
    explore: 'কারুশিল্প দেখুন', ai: 'AI টুল', stories: 'গল্প', about: 'আমাদের সম্পর্কে', login: 'লগইন', artist: 'আমি একজন কারিগর', buyer: 'আমি একজন ক্রেতা',
    eyebrow: 'ভারতের কারুশিল্প, একসাথে', title1: 'যেখানে', title2: 'ঐতিহ্য', title3: 'তার পরের', title4: 'অধ্যায় খুঁজে পায়।',
    description: 'একটি উষ্ণ ও বুদ্ধিমান বাজার, যা প্রজন্মের কারুশিল্পকে নতুন মানুষের কাছে পৌঁছে দেয়।', aiInsight: 'AI অন্তর্দৃষ্টি', ready: 'কারুশিল্পের গল্প প্রস্তুত', handwoven: 'হাতে বোনা', storiesWord: 'গল্প', from: 'যে হাত থেকে', artisans: 'ভারতীয় কারিগর', seeAi: 'AI কীভাবে সাহায্য করে দেখুন', sectionTitle: 'একটি প্ল্যাটফর্ম। বহু শিল্পরূপ।', sectionText: 'হস্তনির্মিত কাজ আবিষ্কার করুন, কারিগরদের সঙ্গে যুক্ত হন এবং ঐতিহ্যকে এগিয়ে নিন।'
  },
  mr: {
    explore: 'हस्तकला पहा', ai: 'AI साधने', stories: 'कथा', about: 'आमच्याबद्दल', login: 'लॉगिन', artist: 'मी एक कारागीर आहे', buyer: 'मी खरेदीदार आहे',
    eyebrow: 'भारताची हस्तकला, एकत्र', title1: 'जिथे', title2: 'वारसा', title3: 'आपले पुढचे', title4: 'पान शोधतो.',
    description: 'कारागिरांच्या पिढ्यानपिढ्यांच्या कलेला नव्या ग्राहकांपर्यंत पोहोचवणारे उबदार आणि बुद्धिमान व्यासपीठ.', aiInsight: 'AI सूचना', ready: 'कलेची कथा तयार', handwoven: 'हातमाग', storiesWord: 'कथा', from: 'या हातांतून', artisans: 'भारतीय कारागीर', seeAi: 'AI कशी मदत करते ते पहा', sectionTitle: 'एक व्यासपीठ. अनेक कला प्रकार.', sectionText: 'हस्तनिर्मित कला शोधा, कारागिरांशी जोडा आणि परंपरेला पुढे न्या.'
  },
  ta: {
    explore: 'கைவினைகளை காண்க', ai: 'AI கருவிகள்', stories: 'கதைகள்', about: 'எங்களைப் பற்றி', login: 'உள்நுழைவு', artist: 'நான் ஒரு கைவினைஞர்', buyer: 'நான் வாங்குபவர்',
    eyebrow: 'இந்திய கைவினை, ஒன்றாக', title1: 'பாரம்பரியம்', title2: 'தன்', title3: 'அடுத்த', title4: 'அத்தியாயத்தை காணும் இடம்.',
    description: 'தலைமுறைகளாக வந்த கைவினைகளை புதிய மக்களிடம் கொண்டு செல்லும் அன்பான, புத்திசாலி சந்தை.', aiInsight: 'AI பார்வை', ready: 'கைவினைக் கதை தயார்', handwoven: 'கைத்தறி', storiesWord: 'கதைகள்', from: 'இந்த கைகளிலிருந்து', artisans: 'இந்திய கைவினைஞர்கள்', seeAi: 'AI எப்படி உதவுகிறது', sectionTitle: 'ஒரு தளம். பல கலை வடிவங்கள்.', sectionText: 'கைவினைப் பொருட்களை கண்டறிந்து, கைவினைஞர்களை சந்தித்து, பாரம்பரியத்தை முன்னெடுக்கவும்.'
  }
};

function Logo({ small = false }) {
  return (
    <div className={`ac-logo ${small ? 'ac-logo-small' : ''}`} aria-hidden="true">
      <img src="/ac.jpeg" alt="" />
    </div>
  );
}

function ReferenceHome({ onEnterMarketplace }) {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  const enter = () => {
    setMenuOpen(false);
    onEnterMarketplace();
  };

  return (
    <div className="reference-page">
      <header className="reference-header">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Artisan Connect home">
          <Logo small />
          <span className="brand-name"><strong>Artisan</strong> <em>Connect</em></span>
        </button>

        <nav className={`reference-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <button onClick={enter}>{t.explore}</button>
          <a href="#ai">{t.ai}</a>
          <a href="#stories">{t.stories}</a>
          <a href="#about">{t.about}</a>
        </nav>

        <div className="header-actions">
          <label className="language-picker" aria-label="Language">
            <span>◎</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
            </select>
          </label>
          <button className="login-button" onClick={enter}>{t.login}</button>
          <button className="artist-button" onClick={enter}>{t.artist}<span>↗</span></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span>✦</span>{t.eyebrow}</p>
            <h1>
              {t.title1} <span>{t.title2}</span><br />
              {t.title3}<br />
              {t.title4}
            </h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-ctas">
              <button className="primary-cta" onClick={enter}>{t.artist} <span>→</span></button>
              <button className="secondary-cta" onClick={enter}>{t.buyer} <span>→</span></button>
              <a className="ai-link" href="#ai">{t.seeAi} <span>↓</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Handwoven stories from Indian artisans">
            <div className="peach-circle" />
            <div className="arch-panel">
              <div className="weave-lines" />
              <div className="arch-copy">
                <span>{t.handwoven}</span>
                <strong>{t.storiesWord}</strong>
                <small>{t.from}<br /><b>{t.artisans}</b></small>
              </div>
            </div>
            <div className="ai-badge"><span>✦</span><div><b>{t.aiInsight}</b><small>{t.ready}</small></div></div>
            <button className="story-card" onClick={enter}>
              <span className="story-thumb"><img src="/ac.jpeg" alt="" /></span>
              <span><small>{t.from}</small><b>{t.artisans}</b></span><i>↗</i>
            </button>
          </div>
        </section>

        <section className="intro-strip" id="ai">
          <div><span className="section-kicker">ART • CRAFT • CULTURE</span><h2>{t.sectionTitle}</h2></div>
          <p>{t.sectionText}</p>
        </section>

        <section className="story-placeholder" id="stories">
          <div><span className="section-kicker">{t.stories}</span><h2>Real hands. Handmade stories.</h2></div>
          <button onClick={enter}>Explore the marketplace →</button>
        </section>

        <section className="about-placeholder" id="about">
          <span className="section-kicker">{t.about}</span>
          <h2>Tradition meets tomorrow.</h2>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [showMarketplace, setShowMarketplace] = useState(false);
  if (showMarketplace) return <AppMarketplace />;
  return <ReferenceHome onEnterMarketplace={() => setShowMarketplace(true)} />;
}
