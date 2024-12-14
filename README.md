# HW10A - Live Sound Visualization 🎶

## Overview
This project visualizes live audio from a 1-minute song using the **p5.sound library**. The visualization is dynamic and interactive, making it suitable for live performances or creative experiments.

---

## Features
1. **Dynamic Visuals**:
   - **Volume Visualization**: A pulsating circle that grows/shrinks with the song's volume.
   - **Frequency Bars**: Bars that represent the song's frequency spectrum in real time.
   - **Dynamic Background**: The background color changes based on the song's volume.

2. **Interactivity**:
   - **Play/Pause Button**: The song starts or stops when the center button is clicked.
   - **Sensitivity Slider**: Adjusts the visualization's responsiveness.

---

## Song Information
- **Title**: Titanic
- **Artist**: Celine dion
- **Parameters Contribution**:
  - **Volume (Amplitude)**: Controls the size of the pulsating circle and background color.
  - **Frequency Spectrum**: Determines the height of the frequency bars.

--
## **Controls**:
   - **Play/Pause**: Click the center button to start or stop the song.
   - **Sensitivity Slider**: Adjust how responsive the visuals are.

---

# HW10B - Static Visualization of a Song 🎶

## Overview
This project uses the **p5.sound library** to generate a static representation of a 3-minute song. The visualization is based on the song's amplitude peaks and includes creative visual elements to make it engaging and personal.

---

## Features
1. **Waveform Representation**:
   - The amplitude peaks are visualized as a waveform that spans the canvas.
2. **Dynamic Gradient Background**:
   - A smooth gradient background adds visual appeal and enhances the presentation.
3. **High-Intensity Highlights**:
   - Points of high intensity (amplitude > 0.7) are marked with glowing circles.

---

## Song Information
- **Title**: Titanic (Same song from previous exercise but a 3-minute version)
- **Artist**: Celine dion
- **How the Song Influences the Visualization**:
  - The song's amplitude peaks are mapped to the canvas height.
  - High-intensity moments are highlighted to emphasize dynamic sections of the song.

---

## How It Works
1. **Amplitude Peaks**:
   - The `p5.sound` library's `getPeaks()` function retrieves an array of amplitude samples for the entire song.
   - These samples are used to plot the waveform and highlight high-intensity points.
2. **Gradient Background**:
   - A gradient background enhances the static visualization.
3. **Static Output**:
   - The visualization is rendered once and does not loop, creating a "poster" of the song.

---
