import "./styles.css"
export const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
           <div className="footer-txt">
            <p>Made with ❤️ by Shreya</p>
            {
                (currentYear===2023)?<p>Copyright @ 2023</p>:<p>Copyright @ 2023-{currentYear}</p>
            }
            </div>
        </div>
    );
}