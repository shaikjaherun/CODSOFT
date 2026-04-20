let display = document.getElementById("display");

function btnClick(value)
{
    display.value += value;
}

function ClrDis()
{
    display.value = "";
}

function DelLast()
{
    display.value = display.value.slice(0,-1);
}

function calculate()
{
    if(display.value === "")
    {
        display.value = "0";
        return;
    }

    try
    {
        display.value = eval(display.value);
    }
    catch
    {
        display.value = "Error";
    }
}