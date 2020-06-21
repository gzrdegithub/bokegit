var oImg = document.getElementsByTagName("img");//通过标签获取图片
        var nowX , nowY , lastX , lastY , minusX , minusY , roX = 0 , roY = 0;
        var odiv1 = document.getElementById("div1");
        var timer;
        
        (function(i){
        var imgLan = oImg.length;//保存数据
        var deg = 360/imgLan;                   
        for(; i<imgLan ; i++ )
            {
            oImg[i].style.transform = "rotateY("+deg*i+"deg) translateZ(350px)";
            }
        } )(0);
        document.onmousedown = function(e){
                //鼠标按下
                var e = e || window.event;//event  IE不支持参数调用
                //第一次点击的时候产生的最早的值
                lastX = e.clientX;
                lastY = e.clientY;
            this.onmousemove = function(e){
                //鼠标移动
                var e = e || window.event;
                nowX = e.clientX;//每次移动一次产生一个新的坐标值
                nowY = e.clientY;
                //than 计算差
                minusX = nowX - lastX;
                minusY = nowY - lastY;  
                //求旋转的度数
                roY += minusY *0.2;
                roX -= minusX *0.1;
                //than 赋值给度数
                odiv1.style.transform = 'rotateX('+roX+'deg) rotateY('+roY+'deg)';
            
                lastX = nowX;//用完之后变旧值
                lastY = nowY;
            }
            this.onmouseup = function(){
                //鼠标松开
                this.onmousemove = null;//清空鼠标移动事件
                //在一段时间重复做某件事情
                timer = setInterval(function(){
                    minusX *= 0.95;
                    minusY *= 0.95;
                    roY += minusY *0.2;
                    roX -= minusX *0.1;
                    odiv1.style.transform = 'rotateX('+roX+'deg) rotateY('+roY+'deg)';
                    if(Math.abs(minusX)<0.1 || Math.abs(minusY)<0.1)
                    {
                        clearInterval(timer);
                    }
                } , 1000/60)
            }
            
        }