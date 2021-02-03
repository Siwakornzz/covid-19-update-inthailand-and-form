

function testcovid19()
{
    let repersonal = document.getElementsByName("personal")
    let cone = document.getElementsByName("choise1")
    let ctwo = document.getElementsByName("choise2")
    let ctree = document.getElementsByName("choise3")
    let cfour = document.getElementsByName("choise4")
    let resultsymp = document.getElementsByName("flexCheckDefault")
    let result = 0 ;

    for (let i =0; i<3; i++)
    {
        if (repersonal[i].checked)
        {
            result+= parseInt(repersonal[i].value)
        }
    }
    for (let i=0 ; i<resultsymp.length; i++)
    {
            if (resultsymp[i].checked)
            {
                result+= parseInt(resultsymp[i].value)
            }
    }
    for (let i = 0 ; i < 2; i++)
    {
        
        if (cone[i].checked)
        {
            result += parseInt(cone[i].value)
        }
        if (ctwo[i].checked)
        {
            result += parseInt(ctwo[i].value)
        }
        if(ctree[i].checked)
        {
            result += parseInt(ctree[i].value)
        }
        if(cfour[i].checked)
        {
            result+= parseInt(cfour[i].value)
        }
    }
    

    function warningtoinfected()
    {
        let advice = "ข้อแนะนำ : <br> 1. สังเกตอาการป่วยและวัดไข้ตนเองทุกวัน เป็นเวลา 14 วัน <br> 2. ระหว่าง 14 วันที่สังเกตอาการ ให้แยกเครื่องใช้ส่วนตัว ไม่รับประทานอาหาร หรือ พูดคุยใกล้ชิดกับผู้อื่น งดการไปร่วมกิจกรรมที่มีคนจำนวนมาก งดการเข้าประชุม การไปสถานที่ที่คนพลุกพล่าน เช่น ตลาด ห้างสรรพสินค้าควรอยู่ในที่พักอาศัยเป็นหลัก และเดินทางออกนอกบ้านเท่าที่มีความจำเป็น"
        +"<br> 3. ให้หยุดงาน ลางาน หรือทำงานจากบ้าน ให้พิจารณาตามความเหมาะสมของแต่ละหน่วยงาน <br> 4. หากมีอาการไข้ ไอ เจ็บคอ หรือมีน้ำมูก ภายใน 14 วัน ควรไปพบแพทย์ทันทีพร้อมแจ้งประวัติการเดินทาง หรือการสัมผัสใกล้ชิดกลุ่มเสี่ยง ให้เจ้าหน้าที่โรงพยาบาลทราบ"
        let text ="<h4><b> แบบประเมินความเสี่ยงโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </b> </h4>"  + "<h5> <b> ผลการประเมินเบื้องต้น </b> </h5>" + "<h3 style='color:orange'> คุณมีความเสี่ยงในการสัมผัสโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </h3>" +"<p style='font-size:15px; text-align : left;'>" +advice +"</p>"
        swal.fire({
            html : true,
            title: "<div>" + text + "</div>",
            html : "<img src='"+'https://www.flaticon.com/svg/vstatic/svg/2927/2927633.svg?token=exp=1612361543~hmac=a424370b71b393146b9bf93e12370ffa'+"' style='width:150px;'>",
            icon: "warning",
           
          });
    }
    function risky()
    {
        let advice = "<p style='font-size:18px; text-align:left'> ข้อแนะนำ : <br> 1) ควรไปพบแพทย์ทันที พร้อมแจ้งประวัติการเดินทาง หรือการสัมผัสใกล้ชิดกลุ่มเสี่ยง ให้เจ้าหน้าที่โรงพยาบาลทราบ โดยโทรสอบถาม 1422 ล่วงหน้า "+
                     "2) ควรป้องกันการแพร่กระจายของเชื้อโรค และปฏิบัติตามคำแนะนำของกระทรวงสาธารณสุข" + "<br>" + "3) กรุณาแจ้งหน่วยงานที่มารักษาหรือติดต่องานทันที </p>"
        let text ="<h4><b> แบบประเมินความเสี่ยงโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </b> </h4>"  + "<h5> <b> ผลการประเมินเบื้องต้น </b> </h5>" + "<h3 style='color:red'> คุณอาจเป็นโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </h3>" + advice
       
        swal.fire({
            html : true,
            title: "<div>" + text + "</div>",
            html : "<img src='"+'https://www.flaticon.com/svg/vstatic/svg/2927/2927499.svg?token=exp=1612361543~hmac=e58102f30aceee44ad1c2190f0ae431e'+"' style='width:150px;'>",
            icon: "error",
        });
    }
    function survival()
    {
        let advice = "<p style='font-size:18px'> ข้อแนะนำ : ให้ปฏิบัติตามประกาศกรมสุขภาพจิต เรื่อง มาตรการและการเฝ้าระวังการระบาดของโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) และคำแนะนำในการปฏิบัติตัวของกรมควบคุมโรค </p>"
        let text ="<h4><b> แบบประเมินความเสี่ยงโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </b> </h4>"  + "<h5> <b> ผลการประเมินเบื้องต้น </b> </h5>" + "<h3 style='color:green'> คุณยังไม่มีความเสี่ยงในการสัมผัสโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) </h3>" + advice
       
        swal.fire({
            html : true,
            title: "<div>" + text + "</div>",
            html : "<img src='"+'https://www.flaticon.com/svg/vstatic/svg/2927/2927764.svg?token=exp=1612360622~hmac=5b94c88e99aa62ca0d472681996d3347'+"' style='width:150px;'>",
            icon: "success",
           
          });
    }
    if (result >= 6 )
    {
        risky()
    }
    else if (result > 0 && result <= 5) {
        warningtoinfected()
    }
    else {
        survival()
    }
}
