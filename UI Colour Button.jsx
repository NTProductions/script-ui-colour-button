var mainWindow = new Window("palette", "Colour Button", undefined);
mainWindow.orientation = "column";
var colourOneButton = mainWindow.add("button", undefined, "");
colourOneButton.size = [40, 40];
colourOneButton.fillBrush = colourOneButton.graphics.newBrush(colourOneButton.graphics.BrushType.SOLID_COLOR, [.9765, .3804, .3882]);
colourOneButton.onDraw = customDraw;

mainWindow.center();
mainWindow.show();

var hex = "0xF96163";

colourOneButton.onClick = function() {
    var colorPickerRes = $.colorPicker(hex);
    if(colorPickerRes != -1) {
        var r = colorPickerRes >> 16;
        var g = (colorPickerRes & 0x00ff00) >> 8;
        var b = colorPickerRes & 0xff;
        $.writeln("selected a colour");
        hex = colorPickerRes;
        updateButtonColour(colourOneButton, [r/255, g/255, b/255]);
        } else {
        $.writeln("did not select a colour");
            }
    }

function customDraw()
{ with( this ) {
graphics.drawOSControl();
graphics.rectPath(0,0,size[0],size[1]);
graphics.fillPath(fillBrush);

}}

function updateButtonColour(button, rgbArray) {
        button.fillBrush = button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, rgbArray);
        button.onDraw = customDraw;
        button.enabled = false;
        button.enabled = true;
    }