import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import flower from '../../images/articlespage/flower.png';
import styles from './ArticlesPage.module.css';
export const ArticlesPage = () => {
  return (<>
   {/* <Header /> */}
   <main>
    <section className="articles">
      <div className="articles__container">
        <div className="articles__content">
          <h1 className="articles__title">
            9 tested tips to improve your wellbeing and quality of life
          </h1>
          <img className="flower__img" src={flower} alt="flower" />
          <p className="articles__intro">
           If you are a person who remains busy in work and other matters and pays no attention to your health and wellbeing, you must take a break from the robotic routine and pick healthy habits.
          </p>
          <p className="articles__intro">
            According to a psychologist, eating well and exercise gives your body and brain instant benefits of managing stress, depression, and anxiety. True wellbeing comes with balance, constant growth and acceptance.
          </p>
          <p className="articles__intro">
            Here are a few effective and tested ways that can help you improve your wellbeing:
          </p>

          <ul className="articles__list">
            <li className="articles__item">
              <h3 className="articles__subtitle">1. Take Proper Sleep:</h3>
              <p className="articles__text">
               It may seem to be the most common advice, but trust me most of the people don’t follow the basic strep towards their overall wellbeing. Our body needs proper sleep and rest to heal and renew the energy to function properly. This healing is essential for physical and mental activity throughout the day.
              </p>
              <p className="articles__text">
                Sufficient sleep regulates the hormones that are directly related to our mood and emotions. Most often when you feel an irritated or emotional imbalance, chances are high that your body lacks in taking enough sleep. An adult body needs nearly 6 to 7 hours of sleep per day. So make sure you take enough sleep.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">2. Eat a Balanced Diet:</h3>
              <p className="articles__text">
                Sleep alone is not going to give you the required benefits. You need to eat a healthy and balanced diet and ensure your body receives enough amount of nutrition. The food you consume determines how healthy your inner system is. Moreover, it also helps in determining your emotional health and mental illnesses such as depression.
              </p>
              <p className="articles__text">
                When your body lacks essential nutrients, it leads to serious health problems. Moreover, you end up facing emotional distress and anxiety. Health and wellness experts suggest that you should eat fruits and vegetables in sufficient amount. Moreover, eating nuts and lentil also strengthens your heart. Try to avoid caffeine, sugar and processed food as much as possible.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">3. Expose Your Body to Sunlight</h3>
              <p className="articles__text">
                Vitamin D deficiency leads to several problems such and Seasonal Affective Disorder or SAD. When you are exposed to sunlight, it causes the release of endorphins also called ‘happiness hormones’ that is responsible for the productivity of the brain.
              </p>
              <p className="articles__text">
                So, take some time out of your routine and spend some time in sunlight. But makes sure you wear sunblock to prevent sunburn.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">4. Deal with Stress:</h3>
              <p className="articles__text">
                Although it is difficult to avoid stress nowadays, however, it is definitely possible to deal with it. It is very important to learn to deal with stress in a smart and effective way. For that, try to avoid the situations that cause stress. If your stress is unmanageable, note down the causes of stress as well as what actions can you take to improve your reaction, mood, and even situation?
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">5. Exercise Daily:</h3>
              <p className="articles__text">
                When you remain physically active and exercise daily, your blood flow improves in your entire body. With the increased blood flow, the number of oxygen increases and you feel more energetic, fresh and mentally active.
              </p>
              <p className="articles__text">
                Exercises and physical activities are more important if you are an office worker. Exercise not only ensures our body remains fit but also keeps your mind healthy as well. You don’t have to join expensive gyms for that. A simple walk with your pet or daily morning walk is more than sufficient. The important thing is to make it a daily habit.
              </p>
              <p className="articles__text">
                In addition to your mental health, exercise strengthens your bones and muscles that prevent you from a different type of personal injuries during a workout or running your daily errands.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">6. Stay Away from Smoking and Alcohol:</h3>
              <p className="articles__text">
                If you keep drinking and smoking, no matter how much you spend on your health and how hard you try, your efforts are going to be wasted.
              </p>
              <p className="articles__text">Quit smoking and drinking to ensure you lead a healthy life.</p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">7. Be Social, as Much as You Can:</h3>
              <p className="articles__text">
                Isolation and lack of communication are the two biggest reasons for depression, mental and physical illnesses. No matter how busy your family and work life is, try to dedicate some time to friends and socialise with them.
              </p>
              <p className="articles__text">
                A man cannot stay healthy without interacting with other people. Communicating with others lowers the stress level. If you have heard of laughter therapy, it also has the same purpose to reduce the stress in which you laugh with other people. Everyone needs acceptance and friendship that is fulfilled only when you socialise with others.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">8. Find and Practice New Hobbies:</h3>
              <p className="articles__text">
                Hobby helps us keep busy and engaged. When you have an interest in some activities and enjoy doing them, you take healthy steps to improve your emotional wellbeing. It also keeps the work and daily life’s pressure off your brain. Finding new hobbies is great for strengthening your brain and boost your mood.
              </p>
            </li>

            <li className="articles__item">
              <h3 className="articles__subtitle">9. Learn to Live in the Present:</h3>
              <p className="articles__text">
                The biggest reason for experiencing mood swings, depression and anxiety are when a person remains stuck in past events. Negative self-talking such as ‘why people did this to me’ steal not only the happiness but make the person miss opportunities that the present moment tires to offer.
              </p>
              <p className="articles__text">Learn to live in the present moment and try not to think too much about the future.</p>
              <p className="articles__text">It’s Simple: Laugh and Enjoy!</p>
              <p className="articles__text">
                Don’t take life too seriously. Those who remain happy, smile more and try to keep themselves happy experience better quality of life than those who remain worried all the time. According to a study, children laugh 200 times a day while adults laugh 15 times a day.
              </p>
              <p className="articles__text">
                Staying happy and laughing more is essential for a quality life.
              </p>
            </li>
          </ul>
        </div>

        <div className="articles__sidebar">
          <p className="articles__author">
            <strong>Author:</strong> <a href="#" className="articles__link">John Adams</a>
          </p>
          <p className="articles__date">
            <strong>Publication date:</strong> 06.05.2025
          </p>

          <h3 className="articles__related-title">You can also interested</h3>

          <div className="articles__related">
            <div className="articles__related-item">
              <div className="articles__related-content">
                <p className="articles__related-text">When Anxiety Feels Like a Room With No Doors</p>
                <p className="articles__related-author">Clark</p>
              </div>
            </div>

            <div className="articles__related-item">
              <div className="articles__related-content">
                <p className="articles__related-text">When Anxiety Feels Like a Room With No Doors</p>
                <p className="articles__related-author">Clark</p>
              </div>
            </div>

            <div className="articles__related-item">
              <div className="articles__related-content">
                <p className="articles__related-text">When Anxiety Feels Like a Room With No Doors</p>
                <p className="articles__related-author">Clark</p>
              </div>
            </div>
          </div>

          <button className="articles__btn">Save</button>
        </div>
      </div>
    </section>
    </main>
    {/* <Footer /> */}
   </>)
}