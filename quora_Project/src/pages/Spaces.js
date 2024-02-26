 import Card from "../component/Cardspaces";
import "../pagescss/spaces.css";
const Spaces = () => {
  return (
    <div className="spaces-wrapper">
      <div className="spacesboxes">
        <div className="spaces-banner-invide-container">
          <div className="left-spaces-box">
            <div className="banner">
                <div className="bannner">
              <div><h5>Your Spaces</h5></div>
              <div className="b-right">Recently visited</div>
              </div>
              <div className="buttons-space">
                <button className="mx-2">
                  <i class="fa-solid fa-circle-plus"></i> Create a Space
                </button>
                <button>
                  <i class="fa-regular fa-compass"></i> Discover Spaces 
                </button>
              </div>
            </div>

            <div className="bottom-cards-section">
              <div  className=" bottom-head mt-2">Discover Spaces</div>
              <h6 className="mt-3">Spaces you might like</h6>
              <div className="all-cards-categories mt-3">
               <Card />
              </div>
            </div>
          </div>

          {/* right section of invites */}
          <div className="right-pending-invites">
            <div className="pending-inv">
              <p className="mx-2 p-2">Pending invites</p>
              <hr />
              <div className="bottom-pending-right">
              <i class="fa-brands fa-telegram"></i>
                <p>No Updates here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;

