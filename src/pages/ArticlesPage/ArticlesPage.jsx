import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import flower from '../../images/articleapage/flower.png';
import styles from './ArticlesPage.module.css';

export const ArticlesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <section className={styles.articles}>
          <div className={styles.articles__container}>
            <div className={styles.articles__content}>
              <div className={styles.articles__title__img}>
                <h1 className={styles.articles__title}>
                  9 tested tips to improve your wellbeing and quality of life
                </h1>
                <img className={styles.flower__img} src={flower} alt="flower" />
              </div>

              <p className={styles.articles__intro}>
                If you are a person who remains busy in work and other matters and pays no attention to your health and wellbeing, you must take a break from the robotic routine and pick healthy habits.
              </p>

              <p className={styles.articles__intro}>
                According to a psychologist, eating well and exercise gives your body and brain instant benefits of managing stress, depression, and anxiety. True wellbeing comes with balance, constant growth and acceptance.
              </p>

              <p className={styles.articles__intro}>
                Here are a few effective and tested ways that can help you improve your wellbeing:
              </p>

              <ul className={styles.articles__list}>
                {[
                  {
                    title: '1. Take Proper Sleep:',
                    texts: [
                      'It may seem to be the most common advice, but trust me most of the people don’t follow the basic step towards their overall wellbeing. Our body needs proper sleep and rest to heal and renew the energy to function properly. This healing is essential for physical and mental activity throughout the day.',
                      'Sufficient sleep regulates the hormones that are directly related to our mood and emotions. Most often when you feel an irritated or emotional imbalance, chances are high that your body lacks in taking enough sleep. An adult body needs nearly 6 to 7 hours of sleep per day. So make sure you take enough sleep.'
                    ]
                  },
                  {
                    title: '2. Eat a Balanced Diet:',
                    texts: [
                      'Sleep alone is not going to give you the required benefits. You need to eat a healthy and balanced diet and ensure your body receives enough amount of nutrition. The food you consume determines how healthy your inner system is. Moreover, it also helps in determining your emotional health and mental illnesses such as depression.',
                      'When your body lacks essential nutrients, it leads to serious health problems. Moreover, you end up facing emotional distress and anxiety. Health and wellness experts suggest that you should eat fruits and vegetables in sufficient amount. Moreover, eating nuts and lentil also strengthens your heart. Try to avoid caffeine, sugar and processed food as much as possible.'
                    ]
                  },
                  {
                    title: '3. Expose Your Body to Sunlight:',
                    texts: [
                      'Vitamin D deficiency leads to several problems such as Seasonal Affective Disorder or SAD. When you are exposed to sunlight, it causes the release of endorphins also called ‘happiness hormones’ that are responsible for the productivity of the brain.',
                      'So, take some time out of your routine and spend some time in sunlight. But make sure you wear sunblock to prevent sunburn.'
                    ]
                  },
                  {
                    title: '4. Deal with Stress:',
                    texts: [
                      'Although it is difficult to avoid stress nowadays, however, it is definitely possible to deal with it. It is very important to learn to deal with stress in a smart and effective way. For that, try to avoid the situations that cause stress. If your stress is unmanageable, note down the causes of stress as well as what actions can you take to improve your reaction, mood, and even situation?'
                    ]
                  },
                  {
                    title: '5. Exercise Daily:',
                    texts: [
                      'When you remain physically active and exercise daily, your blood flow improves in your entire body. With the increased blood flow, the number of oxygen increases and you feel more energetic, fresh and mentally active.',
                      'Exercises and physical activities are more important if you are an office worker. Exercise not only ensures our body remains fit but also keeps your mind healthy as well. You don’t have to join expensive gyms for that. A simple walk with your pet or daily morning walk is more than sufficient. The important thing is to make it a daily habit.',
                      'In addition to your mental health, exercise strengthens your bones and muscles that prevent you from a different type of personal injuries during a workout or running your daily errands.'
                    ]
                  },
                  {
                    title: '6. Stay Away from Smoking and Alcohol:',
                    texts: [
                      'If you keep drinking and smoking, no matter how much you spend on your health and how hard you try, your efforts are going to be wasted.',
                      'Quit smoking and drinking to ensure you lead a healthy life.'
                    ]
                  },
                  {
                    title: '7. Be Social, as Much as You Can:',
                    texts: [
                      'Isolation and lack of communication are the two biggest reasons for depression, mental and physical illnesses. No matter how busy your family and work life is, try to dedicate some time to friends and socialise with them.',
                      'A man cannot stay healthy without interacting with other people. Communicating with others lowers the stress level. Everyone needs acceptance and friendship that is fulfilled only when you socialise with others.'
                    ]
                  },
                  {
                    title: '8. Find and Practice New Hobbies:',
                    texts: [
                      'Hobby helps us keep busy and engaged. When you have an interest in some activities and enjoy doing them, you take healthy steps to improve your emotional wellbeing. It also keeps the work and daily life’s pressure off your brain. Finding new hobbies is great for strengthening your brain and boosting your mood.'
                    ]
                  },
                  {
                    title: '9. Learn to Live in the Present:',
                    texts: [
                      'The biggest reason for experiencing mood swings, depression and anxiety are when a person remains stuck in past events. Negative self-talking such as ‘why people did this to me’ steal not only the happiness but make the person miss opportunities that the present moment tries to offer.',
                      'Learn to live in the present moment and try not to think too much about the future.',
                      'It’s Simple: Laugh and Enjoy!',
                      'Don’t take life too seriously. Those who remain happy, smile more and try to keep themselves happy experience better quality of life than those who remain worried all the time.',
                      'Staying happy and laughing more is essential for a quality life.'
                    ]
                  }
                ].map((tip, i) => (
                  <li key={i} className={styles.articles__item}>
                    <h3 className={styles.articles__subtitle}>{tip.title}</h3>
                    {tip.texts.map((t, j) => (
                      <p key={j} className={styles.articles__text}>{t}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.articles__sidebar}>
              <p className={styles.articles__author}>
                <strong>Author:</strong>{' '}
                <a href="#" className={styles.articles__link}>John Adams</a>
              </p>
              <p className={styles.articles__date}>
                <strong>Publication date:</strong> 06.05.2025
              </p>

              <h3 className={styles.articles__relatedTitle}>You can also be interested</h3>

              <div className={styles.articles__related}>
                {[1, 2, 3].map((n) => (
                  <div key={n} className={styles.articles__relatedItem}>
                    <div className={styles.articles__relatedContent}>
                      <p className={styles.articles__relatedText}>
                        When Anxiety Feels Like a Room With No Doors
                      </p>
                      <p className={styles.articles__relatedAuthor}>Clark</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.articles__btn}>Save</button>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};
