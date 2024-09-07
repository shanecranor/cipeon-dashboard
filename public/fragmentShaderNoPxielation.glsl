

uniform vec3 iResolution; // resolution of the screen
uniform float iTime;      // time variable

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Retrieve screen resolution and pixel coordinates
    vec2 uv = fragCoord.xy / iResolution.xy;

    // Time value limited to 20 FPS (1/20th of a second)
    float frameRate = 24.0;
    float frameTime = 1.0 / frameRate;
    float tempTime = floor(iTime / frameTime) * frameTime * 1.0;

    // Calculate x and y based on the UV coordinates
    float x = uv.x * iResolution.x;
    float y = uv.y * iResolution.y;

    // Calculate the hex color value directly
    float colorHex = floor(
        mod(abs(mod(x / 30.0, 100.0) * y * tan(x * 100.0 + tempTime)), 16777215.0)
    );

    // Extract RGB components using bitwise operations
    float r = floor(mod(colorHex / 65536.0, 256.0)) / 255.0;
    float g = floor(mod(colorHex / 256.0, 256.0)) / 255.0;
    float b = floor(mod(colorHex, 256.0)) / 255.0;

    // Combine into a color vector
    vec3 color = vec3(r, g, b);

    // Set the final fragment color
    fragColor = vec4(color, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}