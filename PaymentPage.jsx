import React from "react";
// import {Link} from 'react-router-dom'

const PaymentPage = ({productId}) => {
    let Url=""
    // const handleProceedToPay = () => {
    if (productId===1){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$699&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===2){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$499&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===3){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$299&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===4){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$599&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===5){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$269&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===6){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$199&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===7){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$149&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===8){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$299&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===9){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$179&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===10){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$4399&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===11){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$3459&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===12){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$199&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===13){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$21399&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===14){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$14599&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===15){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$15495&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===16){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$399&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===17){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$456&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===18){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$946&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===19){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$1759&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===20){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$749&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===21){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$1459&cu=INR&mc=5499&tr=6295778";
    }
    else if (productId===22){
         Url = "upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$21999&cu=INR&mc=5499&tr=6295778";
    }
    //     // const encodedDiscountedPrice = encodeURIComponent(discountedPrice);
    //     const Url = `upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=${discountedPrice}&cu=INR&mc=5499&tr=6295778`;
    //     // const Url = `upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=${encodedDiscountedPrice}&cu=INR&mc=5499&tr=6295778`;
    //     // const convertedStringUrl = String(Url)
    //     // const decodedString = decodeURIComponent(convertedStringUrl);
    //     const modifiedUrl = Url.replace(/\s/g, "");
    //     console.log(modifiedUrl);
    //     // const modifiedUrl = decodedString.replace(/&am=(\d+)/, (amount) => `&am=${amount}`);
        // window.open(Url, '_main');
    //   };
        // const encodedDiscountedPrice = encodeURIComponent(discountedPrice);
        // const Url = `upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=$499&cu=INR&mc=5499&tr=6295778`;
        // const Url = `upi://pay?pa=bajajpay.6879729.02663667@indus&pn=ServiceStation&tr=105881934209058!&tn=CUST21417826&am=${encodedDiscountedPrice}&cu=INR&mc=5499&tr=6295778`;
        // const convertedStringUrl = String(Url)
        // const decodedString = decodeURIComponent(convertedStringUrl);
        // const modifiedUrl = Url.replace(/\s/g, "");
        // console.log(modifiedUrl);
        // console.log("abhay")
        // const modifiedUrl = decodedString.replace(/&am=(\d+)/, (amount) => `&am=${amount}`);
        // window.open(modifiedUrl, '_blank');

    
  return (
    <div style={{backgroundColor:"#fff",position:"absolute",top:"60px",left:"0",width:"100%",height:"100%"}}>

         <div style={{padding:"20px",backgroundColor:"#f7f8f9"}}>
        <div className="container" style={{maxWidth:"1140px"}}>
            <h3  style={{fontSize:"24px",fontFamily: "Roboto,Arial,sans-serif !important",color:"#222222",fontWeight:"600",lineHeight:"1.6"}}>Address</h3>
        </div>
        </div>
        <br />
        <div className="container" style={{maxWidth:'1140px'}}>
            <div className="row" style={{display:"flex",flexWrap:"wrap",}}>
                <div className="col-md-8 offset-md-2" style={{flex:"0 0 auto", width:"66.66"}}>
                    <div className="row mb-50" style={{marginBottom:"15px !important"}}>
                        <div className="col-lg-12 col-md-12" style={{flex:"0 0 auto",width:"100%"}}>
                            <form className="field_form shipping_calculator" method="POST">
                                <div className="form-row row" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <div className="form-group col-lg-6 " style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="fullname" placeholder="Full Name" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-6" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="mobile" placeholder="Mobile Number" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-6" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="pincode" placeholder="PIN Code" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-6" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="house" placeholder="Flat, House no, Building, Company" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-6" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="area" placeholder="Area, Colony, Street, Sector, Village" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-6" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="area" placeholder="Town / City" required="required"/>
                                    </div>
                                    <div className="form-group col-lg-12" style={{marginBottom:"1rem"}}>
                                        <input style={{backgroundColor:"#fff",borderRadius:"7px",outline:"none",border:"1px solid #e2e9e1",height:"45px",boxShadow:"none",paddingLeft:"20px",fontSize:"13px",color:"#1a1a1a",width:"100%"}} type="text" name="State" placeholder="State" required="required"/>
                                    </div>
                                    </div><br /><br />
                                    <div className="form-group col-lg-12" style={{marginBottom:"1rem"}}>
                                        {/* <center><Link style={{display:"inline-block",fontSize:"14px",fontWeight:"700",padding:"12px 13px",borderRadius:"4px",color:"#fff",border:"1px solid #0084ff",backgroundColor:"#0084ff",cursor:"pointer",letterSpacing:".5px"}} className="btn btn-block" to="#" onClick={handleProceedToPay}>Proceed to Pay</Link></center> */}
                                        <center><a style={{display:"inline-block",fontSize:"14px",fontWeight:"700",padding:"12px 13px",borderRadius:"4px",color:"#fff",border:"1px solid #0084ff",backgroundColor:"#0084ff",cursor:"pointer",letterSpacing:".5px"}} className="btn btn-block" href={Url} target="_main">Proceed to Pay</a></center>
                                    </div>
                                </form></div>
                            
                        </div>
                    </div>
                </div>
            </div>     <br /><br />      
            <footer class="main">   
    <div className="container pb-10 wow fadeIn animated animated" style={{visibility: "visible"}}>
        <div className="row">
            <div className="col-lg-12">
                <p style={{fontSize:"18px"}}>
                    Term &amp; Conditions
                </p>
            </div>
        </div>
    </div>
</footer>
    </div>

  );
};

export default PaymentPage;
