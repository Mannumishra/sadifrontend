import React from 'react';
import '../matrimony/matrimony.css'; 


const Matrimony = () => {
  return (
    <div>
    <div className="matrimony-container">
      <div className="content">
        <h1>India Bharat <span className="highlight">Matrimony.</span></h1>
        <p className="quote">
          when a person gets married he has completed half of his deen, so let him fear God with regard to the other half.
        </p>
        <div className="ratings">
          <div className="profile-pics">
        
            <img src="https://img.freepik.com/free-photo/affectionate-indian-couple-celebrating-propose-day-together_23-2151110963.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=ais" alt="Profile 1" />
            <img src="https://shaadisquad.com/wp-content/uploads/2024/02/1.jpeg" alt="Profile 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtQkrg5Boe7HFk8mqKcSuxxklS3HorrvkTA&s" alt="Profile 3" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6SomYFN1fg80rkZzwTxKNbzPuWRO6skWbzD16mOuswHM45tOH9m6q8U5RcH2-W4lpcM&usqp=CAU" alt="Profile 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tBHW0RvAFdV1EcwBVvvG2N7waiB03lLMWw&s" alt="Profile 5" />
          </div>
          <div className="stars">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>4.5 / 5</span>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/wedding-couple-5006323-4167024.png?f=webp" alt="Couple" />
      </div>
    </div>
         <div className="center">
           <h2>Find yourRight Match here</h2>
         </div>
         <div className="input-box">
         <select style={{height:"40px",width:"20%",borderRadius:"5px",margin:"20px",}}>
             <option value="" disabled selected>I am looking for you </option>
             <option value="Marriage">marriage</option>
             <option value="Relationship">relationship</option>
             <option value="tinder">tinder</option>
         </select>
       <select style={{height:"40px",width:"20%",borderRadius:"5px",margin:"20px",}}>
         <option value="" disabled selected>Maritial status </option>
         <option value="Single">Single</option>
         <option value="Married">Married</option>
         <option value="Unmarried">Unmarried</option>
       </select>
   <select style={{height:"40px",width:"20%",borderRadius:"5px",margin:"20px",}}>
     <option value="" disabled selected>Select an address </option>
     <option value="address1">Address 1</option>
     <option value="address2">Address 2</option>
     <option value="address3">Address 3</option>
   </select>
   <button className="btn">
         Search
   </button>
     </div>
     
    </div>
       
  );
};

export default Matrimony;
