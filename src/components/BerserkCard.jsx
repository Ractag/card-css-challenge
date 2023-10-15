const BersCard = () => {
  return (
    <main className="card">
      <div className="card-title">
        <h1>ベルセルク</h1>
        (Berserk)
        <p className="rate">Rating: ⭐⭐⭐⭐</p>
      </div>
      <div className="card-desc">
        Guts, the protagonist of &quot;Berserk,&quot; is a solitary warrior with
        a brutal destiny. Marked by a massive sword, the Dragon Slayer, he dons
        black armor and a scar over his right eye. His story is one of a
        tormented man, battling inner and outer demons in a dark and unforgiving
        world.
      </div>
      <div className="warnings">⚠️Violence, sex, language</div>
      <div className="footer">
        <button>
          <img src="src/assets/play-button-arrowhead.png" alt="play-button" />
        </button>
        <button>
          <img
            src="src/assets/white-thumbs-up-icon-26.jpg"
            alt="evaluate-button"
          />
        </button>
        <button>
          <img
            src="src/assets/dlf.pt-selena-gomez-png-tumblr-3121985.png"
            alt="share-button"
          />
        </button>
      </div>
    </main>
  );
};

export default BersCard;
