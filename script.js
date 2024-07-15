document.getElementById('saveImage').addEventListener('click', function() {
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const CardNumber = document.getElementById('CardNumber').value || "-";
    const Contractnumber = document.getElementById('Contractnumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const savings = document.getElementById('savings').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const Earnedmoney = document.getElementById('Earnedmoney').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/loanotp/blob/main/M.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 130px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่หนังสือของบริษัท 0806 1/2567</p>     
                <p style="position: absolute; top: 165px; left: 350px; color:#656565; font-size: 20px; font-weight: bold;">
                วันที่ ${transactionDate}
                </p>     
                
                <p style="position: absolute; top: 200px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">
                เรื่อง
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                แก้ไขข้อมูลในระบบ
                </p>     
                
                <p style="position: absolute; top: 230px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">
                เรียน
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                คุณ <span style="font-weight: bolder; color:#060606;">${accountNumber}</span> 
                </p>     
                
                <p style="position: absolute; top: 200px; left: 48%; color:#656565; font-size: 20px; font-weight: bold; text-align: right; transform: translateX(-50%);width: 90%;">
                เลขที่สัญญาสินเชื่อ <span style="color:#dd0000;">${Contractnumber}</span>
                </p>
                
                <p style="position: absolute; top: 230px; left: 48%; color:#656565; font-size: 20px; font-weight: bold; text-align: right; transform: translateX(-50%);width: 90%;">
                หมายเลขบัตรประชาชน <span style="color:#dd0000;">${CardNumber}</span>
                </p>
                
                <p style="position: absolute; top: 270px; left: 40px; color:#656565; font-size: 20px; font-weight: bold; width: 90%; line-height: 1.2;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                เรียนคุณ <span style="font-weight: bolder; color:#060606;">${accountNumber}</span> 
                ต้องทําการวางเงินเข้าในระบบหลักของธนาคารแห่งประเทศไทย ใช้เป็นการโอนผ่านบัญชี 
                เพื่อยืนยันตัวตนในการปลดระงับบัญชี (E-Signature) เป็นจํานวน <span style="color:#dd0000;">${amount}</span> บาท เนื่องจากการทําธุรกรรมทางการเงินต้อง 
                กรอกข้อมูลลงทะเบียนให้ชัดเจนและถูกต้อง เพื่อเป็นการป้องกันสิทธิของ ผู้ให้กู้ และ ผู้กู้ เพื่อไม่ให้เกิดความเสียหายใน อนาคต
                ต่อทั้งสองฝ่าย และเพื่อหลีกเลี่ยงไม่ให้เกิดคดีความด้านกฎหมายที่อาจส่งผลแก่ผู้กู้ ผู้กู้ต้องทําการขอยื่นเรื่องยืนยันตัวตนขอแก้ไข
                ข้อมูลลงทะเบียนใหม่ให้ถูกต้อง (
                <span style="text-decoration: underline;">
                ยอดชําระถือเป็นการยืนยันตัวตนของผู้กู้ในการชําระวางเท่านั้น ไม่สามารถหักจากยอดสินเชือได้
                </span>)
                </p>
                
                <p style="position: absolute; top: 420px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%; line-height: 1.2;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                หลังดําเนินแก้ไขแล้ว ค่าชําระวางจะคืนพร้อมกับยอดรวมสินเชื่อทั้งหมด ดําเนินการยื่นเรื่องขอแก้ไขข้อมูลแล้วเสร็จ 
                ฝ่ายระบบจะดําเนินการอัตโนมัติเพื่อแก้ไข และได้รับยอดเงินถูกต้อง ระบบจะปลดระงับบัญชีผู้กู้โดยอัตโนมัติทันที
                </p>
                
                <p style="position: absolute; top: 510px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">
                ยอดสินเชื่อ
                </p>     
                <p style="position: absolute; top: 510px; left: 30%; color:#656565; font-size: 20px; font-weight: bold; text-align: right; transform: translateX(-50%);width: 90%;">
                <span style="color:#dd0000;">${savings}</span>&nbsp;&nbsp;&nbsp;&nbsp;บาท&nbsp;&nbsp;&nbsp;&nbsp;(ดำเนินการสำเร็จ)
                </p>
                
                <p style="position: absolute; top: 535px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">
                ค่ายืนยันในการแก้ไขข้อมูล
                </p>     
                <p style="position: absolute; top: 535px; left: 33.7%; color:#656565; font-size: 20px; font-weight: bold; text-align: right; transform: translateX(-50%);width: 90%;">
                <span style="color:#dd0000;">${amount}</span>
                &nbsp;&nbsp;&nbsp;บาท&nbsp;&nbsp;&nbsp;
                <span style="color:#dd0000;">(ระหว่างรอดำเนินการ)</span>
                </p>
                
                <p style="position: absolute; top: 565px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%; line-height: 1.2;">
                ยอดเงินในเป๋าตังค์ของผู้กู้จะทําการถอนได้เป็นจำนวนทั้งหมด <span style="color:#dd0000;">${Earnedmoney}</span> บาท หลังจากผู้กู้ดําเนินการยื่นเรื่องขอแก้ไข 
                เสร็จทางเจ้าหน้าที่ฝ่ายระบบจะส่งมอบรหัสถอนเงิน OTP ใหม่อีกครั้ง ผู้กู้ต้องดําเนินการแก้ไขให้เป็นปกติ หากผู้กู้ไม่ดำเนินการ
                เพื่อขอแก้ไขจะมีผลกระทบต่อผู้กู้ 
                <span style="text-decoration: underline;">
                ตามหมายเหตุ
                </span>

                </p>
                
                <p style="position: absolute; top: 645px; left: 40px; color:#656565; font-size: 20px; font-weight: bold; width: 90%; line-height: 1.2;">
                <span style="font-weight: bolder; color:#060606;text-decoration: underline;">หมายเหตุ</span> : 
                การกรอกข้อมูลสําคัญทางธุรกรรมการเงิน ไม่เป็นไปตามความจริง ถือว่าผู้กู้มีเจตนาจงใจ ในการกรอกข้อมูล 
                อันเป็นเท็จต่อเจ้าหน้าที่ ถือเป็นความผิดด้านกฎหมายทางคดีความว่าด้วยความผิดฐานปลอมเอกสาร ต้องระวังโทษจําคุก 
               ตามประมวลกฎหมายอาญา มาตรา 264 265 33 31 ว่าด้วยการปลอมแปลงเอกสาร การบิดเบือนอีกทั้งประกอบด้วย 
               4 มาตราย่อย นั่งโทษจําคุกไม่เกิน 3 ปี ปรับ 60,000 บาท หรือทั้งจําทั้งปรับ
               </p>
                
                <p style="position: absolute; top: 743px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%; line-height: 1.2;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                จึงเรียนมาเพื่อโปรดแจ้งให้เจ้าหน้าที่ที่เกี่ยวของทราบและถือปฎิบัติ
                </p>
                
                
                <p style="position: absolute; top: 765px; left: 69%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 830px; left: 69%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">(นางสาว เมทินี ศุภสวัสดิ์กุล)</p>                 
                <p style="position: absolute; top: 850px; left: 69%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 50%;">ผู้อำนวยการอาวุโส ฝ่ายนโนบายการกำกับสถาบันการเงิน</p>                 
              </div>

                
              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
