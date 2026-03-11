export default function Help() {
   const faqs = [
      {
         question: "What is Live-Line?",
         answer: "Live-Line is a real-time NYC subway tracker that shows you the closest stations and upcoming train arrivals based on your location."
      },
      {
         question: "How does Live-Line find stations near me?",
         answer: "Live-Line uses your device's GPS to find the 5 closest MTA subway stations to your current location. If you deny location access, it defaults to a central NYC location."
      },
      {
         question: "How often is the train data updated?",
         answer: "Train arrival times are pulled directly from the MTA's real-time GTFS feed and refresh automatically every 60 seconds."
      },
      {
         question: "What do N and S mean on the train cards?",
         answer: "N stands for Northbound and S stands for Southbound. These indicate the direction the train is heading."
      },
      {
         question: "How do I save a favorite station?",
         answer: "You must be logged in to save favorites. Once logged in, navigate to a station and click the save button to add it to your Favorites page."
      },
      {
         question: "Do I need an account to use Live-Line?",
         answer: "No, you can view nearby stations and train times without an account. An account is only required to save favorite stations."
      },
      {
         question: "Why isn't my location being detected?",
         answer: "Make sure you've allowed location access in your browser settings. If you've denied it, Live-Line will default to a central NYC location instead."
      },
      {
         question: "Why are some trains not showing up?",
         answer: "Some trains may not appear if there are no upcoming arrivals within the next 30 minutes, or if the MTA feed hasn't reported any scheduled trips for that line yet."
      }
   ];
   return (
      <>
         <h1>Help</h1>
            <h3>FAQs</h3>
            <div id="faqs">
               {faqs.map((faq, i) => (
                  <div key={i} className="faq">
                     <h3>{faq.question}</h3>
                     <p>{faq.answer}</p>
                  </div>
               ))}
            </div>
      </>
   )

}