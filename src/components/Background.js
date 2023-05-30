const Background = ({page}) => {
    return ( 
        <div className="background">
            <img src={`../images/${page}/background-${page}-mobile.jpg`} alt="" className="bg-mobile" />
            <img src={`../images/${page}/background-${page}-tablet.jpg`} alt="" className="bg-tablet" />
            <img src={`../images/${page}/background-${page}-desktop.jpg`} alt="" className="bg-desktop" />
        </div>
     );
}
 
export default Background;