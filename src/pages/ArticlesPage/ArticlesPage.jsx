import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import "./ArticlesPage.css";
import nature from '../../images/nature.png';

console.log(nature)

export const ArticlesPage = () => {
  return (
    <>
      <Header />
      <section className="article">
        <div className="article__container">
          <div className="article__main">
            <h1 className="article__title">
              9 tested tips to improve your wellbeing and quality of life
            </h1>

            <div className="article__image">
              <img src={ nature } alt="Wellbeing" />
            </div>

            <div className="article__text">
              <p>
                If you are a person who remains busy with work and other matters and pays no
                attention to your health and wellbeing, you must take a break from the robotic
                routine and pick healthy habits.
              </p>
              <p>
                According to psychologists, eating well and exercising give your body and brain
                instant benefits of managing stress, depression, and anxiety. True wellbeing
                comes with balance, constant growth and acceptance.
              </p>
              <p>
                Here are a few effective and tested ways that can help you improve your wellbeing:
              </p>

              <ul className="article__list">
                <li>
                  <h3>1. Take Proper Sleep</h3>
                  <p>
                    It may seem to be the most common advice, but trust me — most people don’t
                    follow the basic step toward their wellbeing. Our body needs proper sleep
                    and rest to heal and renew the energy to function properly.
                  </p>
                  <p>
                    Sufficient sleep regulates the hormones related to mood and emotions. Adults
                    need about 6–7 hours of sleep per day, so make sure you get enough rest.
                  </p>
                </li>

                <li>
                  <h3>2. Eat a Balanced Diet</h3>
                  <p>
                    Sleep alone is not enough — you also need to eat a balanced diet. The food you
                    consume determines your physical and mental health. Lack of nutrients can lead
                    to emotional distress and anxiety.
                  </p>
                  <p>
                    Eat fruits, vegetables, nuts, and lentils. Try to avoid caffeine, sugar, and
                    processed foods as much as possible.
                  </p>
                </li>

                <li>
                  <h3>3. Expose Your Body to Sunlight</h3>
                  <p>
                    Vitamin D deficiency can cause problems such as Seasonal Affective Disorder
                    (SAD). Sunlight triggers endorphin release — the “happiness hormone”.
                  </p>
                  <p>
                    Spend some time in sunlight, but wear sunblock to prevent sunburn.
                  </p>
                </li>

                <li>
                  <h3>4. Deal with Stress</h3>
                  <p>
                    It’s difficult to avoid stress, but you can manage it. Try to stay away from
                    stress-inducing situations and note down ways to handle your reactions and mood.
                  </p>
                </li>

                <li>
                  <h3>5. Exercise Daily</h3>
                  <p>
                    Daily exercise improves blood flow and oxygen levels, helping you feel more
                    energetic and focused. Even a short morning walk can make a big difference.
                  </p>
                  <p>
                    Exercise strengthens bones and muscles and prevents injuries during daily tasks.
                  </p>
                </li>

                <li>
                  <h3>6. Stay Away from Smoking and Alcohol</h3>
                  <p>
                    If you continue drinking or smoking, your health efforts will be wasted.
                    Quit these habits to live a healthier life.
                  </p>
                </li>

                <li>
                  <h3>7. Be Social, as Much as You Can</h3>
                  <p>
                    Isolation and lack of communication often lead to depression. Spend time with
                    friends, family, and loved ones. Human connection is vital for happiness.
                  </p>
                </li>

                <li>
                  <h3>8. Find and Practice New Hobbies</h3>
                  <p>
                    Hobbies keep your mind active and improve emotional wellbeing. Exploring new
                    interests relieves stress and boosts your mood.
                  </p>
                </li>

                <li>
                  <h3>9. Learn to Live in the Present</h3>
                  <p>
                    Dwelling on the past leads to anxiety and mood swings. Focus on the present
                    and enjoy each moment. Don’t overthink the future.
                  </p>
                  <p>
                    Those who laugh and smile more experience a better quality of life. According
                    to a study, children laugh 200 times a day, while adults only 15 times.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <aside className="article__sidebar">
            <p className="article__author">
              <strong>Author:</strong> <a href="#">John Adams</a>
            </p>
            <p className="article__date">
              <strong>Publication date:</strong> 06.05.2025
            </p>

            <h3 className="article__sidebar-title">You can also interested</h3>

            <div className="related">
              <div className="related__item">
                <p className="related__title">
                  When Anxiety Feels Like a Room With No Doors
                </p>
                <p className="related__author">Clark</p>
              </div>

              <div className="related__item">
                <p className="related__title">
                  When Anxiety Feels Like a Room With No Doors
                </p>
                <p className="related__author">Clark</p>
              </div>

              <div className="related__item">
                <p className="related__title">
                  When Anxiety Feels Like a Room With No Doors
                </p>
                <p className="related__author">Clark</p>
              </div>
            </div>

            <button className="article__btn">Save</button>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};
