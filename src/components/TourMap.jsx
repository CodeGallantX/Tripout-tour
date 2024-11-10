const TourMap = () => {
    return (
      <div className="py-6 w-full lg:max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold font-serif text-left mb-8">Tour Map</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253684.740453583!2d3.1783838622543015!3d6.543887060743418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bef390f7f156f%3A0x950460a9f943e9eb!2sJesus%20Pavillion%20Plaza!5e0!3m2!1sen!2sng!4v1731096586525!5m2!1sen!2sng"
            className="w-full h-[400px] rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default TourMap;  