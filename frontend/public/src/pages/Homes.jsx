import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import EmotionDashboard from "../components/EmotionDashboard";

function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "為什麼要先記錄心情？",
      a: "先看見情緒，才有機會調整情緒。心情日記能幫助你辨識壓力來源，也讓後續的分析更準確。",
    },
    {
      q: "萬能解答書是做什麼的？",
      a: "它的用途是協助認知轉移。當你卡住時，透過文字與回應換一個角度看事情。",
    },
    {
      q: "小遊戲真的有用嗎？",
      a: "有。專注在簡單任務能幫助你暫時從壓力中抽離，讓身心進入比較穩定的狀態。",
    },
    {
      q: "這裡是線上諮商嗎？",
      a: "不是。本平台是初級預防與專業醫療之間的橋樑，提供衛教資訊與資源轉介。",
    },
  ];

  return (
    <div className="home-wrapper">
      {/* 背景動態療癒色塊 */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <main className="home-container">
        {/* HERO */}
        <section className="hero-panel hidden">
          <div className="hero-copy">
            <p className="eyebrow">AI Healing Website</p>
            <h1 className="main-title">心靈療癒所</h1>
            <p className="hero-subtitle">讓情緒流動，找回內心的平靜色彩</p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate("/mood")}>
                開始療癒旅程
              </button>
              <button className="btn-secondary" onClick={() => navigate("/consultation")}>
                了解專業資源
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <div className="hero-water"></div>
              <div className="abstract-art"></div>

              <div className="floating-tags">
                <span>情緒紀錄</span>
                <span>萬能解答書</span>
                <span>療癒小遊戲</span>
              </div>
            </div>
          </div>
        </section>

        {/* 介紹區 */}
        <section className="intro-section hidden">
          <div className="section-kicker">What is Emotion Healing?</div>
          <div className="intro-grid">
            <div className="intro-graphic">
              <div className="dotted-ring"></div>
              <div className="intro-orbit"></div>
            </div>

            <div className="intro-text">
              <h2>什麼是心靈療癒所？</h2>
              <p>
                本平台以「情緒循環」為核心，串聯情緒紀錄、認知轉移、感官放鬆與專業導引。
                使用者從進站、覺察、輸入、分析，到獲得建議與資源，能在同一條流程中完成療癒旅程。
              </p>
              <p>
                我們保留溫柔的視覺語言與插圖風格，並將功能改成更清楚的長版敘事版面，讓使用者更容易理解每一步的意義。
              </p>
            </div>
          </div>
        </section>

        {/* 四部曲 */}
        <section className="how-it-works hidden">
          <div className="section-kicker">HEALING SEQUENCE</div>
          <h2 className="section-title">療癒四部曲</h2>

          <div className="steps-wrap">
            <article className="step-card left">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>情緒紀錄</h3>
                <p>心情日記 & 壓力自評。透過書寫，看見內心的聲音。</p>
                <button className="text-link" onClick={() => navigate("/mood")}>
                  前往記錄
                </button>
              </div>
            </article>

            <article className="step-card right">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>認知轉移</h3>
                <p>萬能解答書。換個角度，讓思緒從卡住的地方慢慢鬆開。</p>
                <button className="text-link" onClick={() => navigate("/answer")}>
                  打開解答之書
                </button>
              </div>
            </article>

            <article className="step-card left">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>感官放鬆</h3>
                <p>療癒小遊戲。讓專注取代焦慮，幫助情緒重新穩定。</p>
                <button className="text-link" onClick={() => navigate("/stress")}>
                  進入小遊戲
                </button>
              </div>
            </article>

            <article className="step-card right">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>專業導引</h3>
                <p>諮詢資源轉介。提供衛教資訊與心理資源，降低求助門檻。</p>
                <button className="text-link" onClick={() => navigate("/consultation")}>
                  查看資源
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* AI 心理分析 */}
        <section className="analysis-section hidden">
          <div className="analysis-card">
            <div className="analysis-copy">
              <div className="section-kicker">AI PSYCHOLOGICAL ANALYSIS</div>
              <h2>AI 心理分析與壓力量化</h2>
              <p>
                觀看心理圖片後輸入第一眼感受，系統會透過大型語言模型分析文字背後的情緒，
                並推薦適合的功能與舒壓方式。
              </p>

              <div className="stress-meter">
                <div className="meter-label">壓力 0% ～ 放鬆 100%</div>
                <div className="meter-track">
                  <div className="meter-fill"></div>
                </div>
                <small>完成測驗與功能後，結果會在此更新</small>
              </div>

              <div className="analysis-actions">
                <button className="btn-primary" onClick={() => navigate("/psych")}>
                  開始 AI 分析
                </button>
                <button className="btn-secondary" onClick={() => navigate("/mood")}>
                  先做心情紀錄
                </button>
              </div>
            </div>

            <div className="analysis-side">
              {/* <EmotionDashboard /> */}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section hidden">
          <div className="section-kicker">FAQs</div>
          <h2 className="section-title">常見問題</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={item.q}>
                <button className="faq-question" onClick={() => setOpenFaq(index === openFaq ? -1 : index)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section hidden">
          <div className="cta-card">
            <h2>準備好讓情緒慢慢回到穩定了嗎？</h2>
            <p>從覺察開始，讓療癒成為一個可以重複使用的日常循環。</p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => navigate("/mood")}>
                立刻開始
              </button>
              <button className="btn-secondary" onClick={() => navigate("/consultation")}>
                尋找支持
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer hidden">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Explore</h3>
              <button onClick={() => navigate("/")}>Home</button>
              <button onClick={() => navigate("/mood")}>Mood Diary</button>
              <button onClick={() => navigate("/answer")}>Answer Book</button>
              <button onClick={() => navigate("/consultation")}>Resources</button>
            </div>

            <div className="footer-center">
              <img src={`${process.env.PUBLIC_URL}/nav-logo.png`} alt="logo" />
            </div>

            <div className="footer-col footer-right">
              <h3>Stay Connected</h3>
              <p>讓網站成為你情緒循環的起點。</p>
              <button className="btn-primary" onClick={() => navigate("/psych")}>
                AI 測驗
              </button>
            </div>
          </div>

          <div className="copyright">
            © 2026 AI Healing Website
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
