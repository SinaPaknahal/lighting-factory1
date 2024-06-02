import Image from "next/image";
import main from "../img/main.jpg"
import aks1 from  "../img/1.png"
import aks2 from  "../img/2.png"
import aks3 from  "../img/3.png"
import aks4 from  "../img/4.png"
import aks5 from  "../img/5.png"
import aks6 from  "../img/6.png"
import aks7 from  "../img/7.png"
import aks8 from  "../img/8.png"
import chart1 from  "../img/chart 1.png"
import p1 from  "../img/p1.png"
import p2 from  "../img/p2.png"
import vvv from  "../img/Untitled-1.png"
import v from  "../img/v.png"
import c from  "../img/c.png"
import c2 from  "../img/c2.png"
import nm from  "../img/nm.png"
import vv from  "../img/12.png"
export default function Home() {
  return (
    <>
    <div className="flex flex-wrap">
    <div
      className="bg-gradient-to-r from-[#87e70f] via-[#6dcb1a] to-[#87e70f] w-full fixed  h-12 md:h-16 shadow-md " 
    >
      <h1 className="text-[#eaece0] text-left text-xl pl-4 pt-2  md:text-3xl md:pl-16 md:pt-4 ">
        Product Datasheet
      </h1>
      
    </div>
    <div className=" flex  justify-center  mt-12  md:mt-16 "><Image src={main} alt="tiba" className="w-full md:w-full " /></div>
    <div className="flex w-full"><h1 className="text-lg font-bold m-10 md:text-4xl  md:m-20 ">چراغ سقف تیبا، ریو و ساینا</h1></div>
     
     
     <div className=" flex flex-wrap  mx-4 justify-between w-full md:mx-20 ">
        <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks1} alt="aks1" className="" />
        <p className="text-lg text-center p-2  md:text-lg lg:text-xl">12 volt</p>
      </div>
       <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks2} alt="aks2" className="" />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">Enrgy saving</p>
      </div>
      <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks3} alt="aks3" className=" " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl ">
          Low voltage <br />Performance
        </p>
      </div >
      <div className="flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks4} alt="aks4" className=" " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">Low heat</p>
      </div>
      <div className="flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks5} alt="aks5" className=" " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">
          Ecologically <br />friendly
        </p>
      </div>
      <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks6} alt="aks6" className="  " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">Long life</p>
      </div>
      <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks7} alt="aks7" className=" " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">
          1 year KEM LIGHT <br />guarantee
        </p>
      </div>
      <div className=" flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/12">
        <Image src={aks8} alt="aks8" className=" " />
        <p className="text-lg text-center p-2 md:text-lg lg:text-xl">
          Easy car side <br />Fixation
        </p>
      </div>  
    </div>


     <div className="flex flex-wrap  mx-4 justify-between w-full md:mx-20">
      <h1 className="text-2xl font-bold p-5 leading-relaxed md:text-4xl  md:p-15  ">
        با افزودن چراغ سقفی اسپرت به خودروهای تیبا ریو و ساینا تجربه رانندگی خود
        را بهبود ببخشید.
      </h1>
      <p className="text-lg font-semibold p-5 leading-relaxed md:text-2xl  md:p-15 md:leading-relaxed">
        این چراغ سقفی با بهره گیری از فناوریهای پیشرفته و طراحی خاص نور مناسبی
        را در داخل اتاق خودرو ایجاد کرده و علاوه بر راحتی نصب لذت استفاده از
        فضای داخلی خودرو را دوچندان میکند از مزایای دیگر این چراغ میتوان به
        طراحی زیبا و ابعاد استاندارد آن اشاره کرد که به بهبود روشنایی و دید بهتر
        در داخل خودروهای تیبا ریو و ساینا کمک شایانی میکند علاوه بر این مصرف
        انرژی کم تولید حداقل گرما و استفاده از مواد اولیه با کیفیت و سازگار با
        محیط زیست این چراغ را به گزینه ای پایدار و دوستدار محیط زیست تبدیل
        میکند. همچنین ضمانت یک ساله معتبر شرکتی اطمینان از کیفیت و عملکرد این
        محصول را به شما هدیه می دهد.
      </p>
    </div>
     <div className="flex flex-wrap  mx-4 justify-between w-full md:mx-20">
      <h1 className="text-lg font-bold p-5 leading-relaxed md:text-4xl  md:p-15">رنگ بندی نور چراغ</h1>
      <Image src={chart1} alt="chart1" className="w-full " />
    </div>


    <div className="flex w-full"><h1 className="text-lg font-bold m-10 md:text-4xl  md:m-20">تصاویر محصول :</h1></div>
    <div className="flex flex-wrap  mx-4 justify-between w-full md:mx-20">
      <div className="flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/2">
        <Image src={p1} alt="p1" className="w-full " /></div>
      <div className="flex flex-col items-center p-2  sm:w-1/2 md:w-1/3 lg:w-1/2">
        <Image src={p2} alt="p2" className="w-full lg:pt-36 md:pt-10 sm:pt-10" />
        <h1 className="text-xl font-bold py-5 md:text-2xl lg:text-5xl">جنس بدنه محصول :</h1>
        <p className="text-lg text-center p-2 md:text-xl lg:text-3xl md:leading-relaxed lg:leading-relaxed">
          پلی کربنات درجه 1 کره ای جهت استحکام بیشتر ، <br />هنگام نصب محصول .
        </p>
      </div>
    </div>
    
    <div className="flex w-full"><h1 className="text-6xl font-bold py-20 px-40">مشخصات فنی LED</h1></div> 
   
      <div className="flex flex-row-reverse w-full">
        <p className="text-3xl font-bold p-20 text-left">typical Electrical and Perspective Curve</p>
      </div>
      <div className="flex flex-row-reverse w-full">
        <h1 className="text-3xl font-bold p-20 text-left ">
          Unless Otherwise Specified, Ambient Temperature is 25°C
        </h1>
      </div>
      <div className="flex flex-wrap  m-10 justify-between w-full md:mx-20 ">
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={v} alt="v" className="" /></div>
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={vvv} alt="vvv" className=""/></div>
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={c} alt="c" className=""/></div>
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={c2} alt="c2" className=""/></div>
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={nm} alt="nm" className=""/></div>
        <div className="flex flex-col items-center p-5  sm:w-full md:w-1/2 lg:w-1/2">
          <Image src={vv} alt="vv" className=""/></div>
        
      </div>
      
    </div>
    </>
  );
}
