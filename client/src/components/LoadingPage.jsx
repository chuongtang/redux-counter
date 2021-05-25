import LoadingPage from './loading.svg'
const LoadingPageCom = () => {
    return ( 
        <div style={{color: 'white', marginLeft:'42%'}}>
            <h2>Connecting to MongoDB </h2>
            <h2>  Atlas database.  .  .</h2>
            <img src={LoadingPage} alt="loading animation" />
        </div>
     );
}
 
export default LoadingPageCom;