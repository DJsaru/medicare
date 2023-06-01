import { useState } from "react";
import "./cards.css";

export default function Cards() {
  const [cards] = useState([
    {
      title: "Card-1",
      rext: "Renal Disease",
      img: "https://t4.ftcdn.net/jpg/00/61/95/83/240_F_61958359_AQMCANCwkiu1Si9CvDv4W4Y0BNzlK51K.jpg",
    },
    {
      title: "Card-2",
      rext: "Orthopedics",
      img: "https://t3.ftcdn.net/jpg/02/87/81/50/240_F_287815077_lJHnMKKTIRpTRyG7ibetRPn7ZmBPq5DS.jpg",
    },
    {
      title: "Card-3",
      rext: "Neurology",
      img: "https://t3.ftcdn.net/jpg/02/08/29/38/240_F_208293872_8ModHoXv1nUR36Rmld6sFj3LFIEDHbHF.jpg",
    },
    {
      title: "Card-4",
      rext: "Dental Care",
      img: "https://t4.ftcdn.net/jpg/02/64/39/59/240_F_264395936_2b6Xux9G1axkBix9qE6RlMaalbEuDXl6.jpg",
    },
    {
      title: "Card-5",
      rext: "Surgery",
      img: "https://t4.ftcdn.net/jpg/02/76/02/13/240_F_276021384_p9d1Hkgn4d5LYX1FnCQRSLw76YX7754n.jpg",
    },
    {
      title: "Card-6",
      rext: "Blood Test",
      img: "https://t4.ftcdn.net/jpg/02/11/04/53/240_F_211045328_HnemU2NVFNwDWnQtDi5JHeHVhMV1jTOr.jpg",
    },
    {
      title: "Card-7",
      rext: "Stomach",
      img: "https://t3.ftcdn.net/jpg/04/02/79/08/240_F_402790894_FdTJsQ8jzT5faJDOTBdxrx3eh7EQ3y38.jpg",
    },
    {
      title: "Card-8",
      rext: "Gynachology",
      img: "https://t4.ftcdn.net/jpg/04/89/67/23/240_F_489672311_qCM9AUOILTaga3JhVqDbarfgoQfr1a1s.jpg",
    },
    {
      title: "Card-9",
      rext: "Cardiology",
      img: "https://as1.ftcdn.net/v2/jpg/02/60/39/00/1000_F_260390071_RraE7AykggXPS50PEmYjpT3RgKUhgvux.jpg",
    },
  ]);

  return (
    <div>
      <section className="depa-sec">
        <div className="depa-cont">
          <div className="depa-cards">
            {cards.map((card, i) => (
              <div key={i}>
                <img className="depa-img" src={card.img} />
                <p>
                  <button>{card.rext}</button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
