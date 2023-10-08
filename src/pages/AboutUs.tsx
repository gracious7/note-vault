import {
   buttonStyle,
   cardBoldParaStyle,
   cardStyle,
   cardTitleStyle,
   cardWrapperStyle,
   div1Style,
   div2Style,
   imageStyle,
   imageWrapperStyle,
   linkStyle,
   mainStyle,
 } from "./AboutUs.style";
 
 const AboutUS = () => {
   return (
     <div style={mainStyle}>
       <div style={div1Style}>
         <div style={div2Style}>
           <button style={buttonStyle}>Return to Homepage</button>
         </div>
         <div style={cardWrapperStyle}>
           <Card
             name={"Lorem ipsum"}
             position={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
             linkedIn={"linkedin.com"}
             image={
               "image_link"
             }
           />
           <Card
             name={"Lorem ipsum"}
             position={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
             linkedIn={"linkedin.com"}
             image={
               ""
             }
           />
           <Card
             name={"Lorem ipsum"}
             position={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
             linkedIn={"linkedin.com"}
             image={
               ""
             }
           />
         </div>
       </div>
     </div>
   );
 };
 
 interface ICardProps {
   name: string;
   image: string;
   position: string;
   linkedIn: string;
 }
 
 const Card = ({ name, position, linkedIn, image }: ICardProps) => {
   return (
     <div style={cardStyle}>
       <div style={imageWrapperStyle}>
         <img style={imageStyle} src={image} alt="Lorem ipsum" />
       </div>
       <div>
         <h1 style={cardTitleStyle}>{name}</h1>
         <p>
           <span style={cardBoldParaStyle}>Position:</span>
           &nbsp; &nbsp;{position}
         </p>
         <p>
           <span style={cardBoldParaStyle}>Contact me:</span>
           &nbsp; &nbsp;
           <a
             style={linkStyle}
             href={`https://www.${linkedIn}`}
             target="_blank"
             rel="noopener noreferrer"
           >
             {linkedIn}
           </a>
         </p>
       </div>
     </div>
   );
 };
 
 export default AboutUS;