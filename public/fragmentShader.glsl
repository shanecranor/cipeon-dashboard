uniform vec3 iResolution; // resolution of the screen
uniform float iTime;      // time variable
float pixelSize = 0.5;  // size of the pixels for pixelation effect

float distanceToPoint(vec2 p1, vec2 p2) {
    return sqrt(pow(p1.x - p2.x, 2.0) + pow(p1.y - p2.y, 2.0));
}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Retrieve screen resolution and pixel coordinates
    vec2 uv = fragCoord.xy / iResolution.xy;

    // Pixelation effect: reduce resolution by pixelSize
    uv = floor(uv * pixelSize) / pixelSize;

    // Time value limited to 20 FPS (1/20th of a second)
    float frameRate = 60.0;
    float frameTime = 1.0 / frameRate;
    float tempTime = floor(iTime / frameTime) * frameTime * -0.1;

    // Calculate x and y based on the UV coordinates
    float x = uv.x * iResolution.x;
    float y = uv.y * iResolution.y;

    // Calculate the hex color value directly
    // float colorHex = floor(
    //     mod(abs((mod(x / 10.0, 100.0) * y * tan(x * 10.0 + tempTime) * 10.0 )+ 400000.0)  , 16777215.0)
    // );
    float colorHex = floor(
        mod(abs(
          (distanceToPoint(vec2(sin(x/500.0)*1000.0, 20.0+(sin(y)*3000.0)), vec2(x/10.0, y/10.0)) + tempTime*5000.0) * 11.0 +((y*100.0+x*10.0)/5.0)
          //(mod(x / 10.0, 100.0) * y * tan(x * 10.0 + tempTime) * 10.0 ) + 400000.0
          ), 16777215.0)
    );

    // Extract RGB components using bitwise operations
    float r = floor(mod(colorHex / 65536.0, 256.0)) / 255.0;
    float g = floor(mod(colorHex / 256.0, 256.0)) / 255.0;
    float b = floor(mod(colorHex, 256.0)) / 255.0;

    // Combine into a color vector
    vec3 color = vec3(r*60.0+g/2.0, g/4.0, b*b*b*100.0);

    // Set the final fragment color
    fragColor = vec4(color, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}

