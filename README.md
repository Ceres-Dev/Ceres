# <img src="https://github.com/Ceres-Dev/.github/blob/main/Profile%20Banner.png" />

Cere is a modern, fast and lightweight **native** text editor built using Python, OpenGL and GLFW. 

## Table Of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup Development Environment](#setup-development-environment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# Getting Started

## Prerequisites

- Python ^11.2 - [Download](https://python.org)
- Git (optional) - [Download for Windows](https://git-scm.com)
- Github Desktop (optional) - [Download](https://desktop.github.com)
- Visual Studio Code (optional) - [Download](https://code.visualstudio.com)

## Setup Development Environment
There are a few steps to getting the app to run on Windows. I haven't tested it on Linux or MacOS but the steps should be similar.

### 1. **Download PyOpenGL binaries**

  First you need to download the unofficial binaries for PyOpenGL and PyOpenGL-Accelerate. There is a Pip package but it won't work in our case. Go to [this link](https://www.lfd.uci.edu/~gohlke/pythonlibs/) and then scroll down to PyOpenGL. Then download the latest PyOpenGL and PyOpenGl Accelerate packages. As of 3/5/2023, it is 3.1.6 so download `PyOpenGL‑3.1.6‑cp311‑cp311‑win_amd64.whl` and `PyOpenGL_accelerate‑3.1.6‑cp311‑cp311‑win_amd64.whl`. Make sure to get the `-cp*.**-` version and NOT the `-pp**-` version. Then go to the downloaded location and run the following command

  ```
  pip install <name of your downloaded wheel>
  ```

  For example if the name of the wheel file is `PyOpenGL‑3.1.6‑cp311‑cp311‑win_amd64.whl`, then you have to run 
  ```
  pip install PyOpenGL‑3.1.6‑cp311‑cp311‑win_amd64.whl
  ```
  Then install the PyOpenGL-Accelerate package in the same way using 
  ```
  pip install <name of your downloaded wheel>
  ```
### 2. **Get the source code**
  Next you have to create a fork of this repository. After that you can clone the repo using
  ```bash
  git clone https://github.com/<your username>/ceres
  ```
  After making changes, you can open a pull request. After your change is verified, it will be merged with the main branch. It is useful to have GitHub Desktop installed. To download it, go to [desktop.github.com](https://desktop.github.com) (not sponsored)

### 3. **Running the app**
  Now to run the app, run the following command from the cloned repository
  ```bash
  python main.py
  ```

### 4. **Debugging**
  During development, it is useful to be able to debug the app after making any changes. This has been already configured for Visual Studio Code. If you have VS Code installed on your machine, then you can open the repository and hit <kbd>F5</kbd>. This will start debugging. To restart the app after making changes, click on the green restart button. If you don't have VS Code installed, you can download it from [code.visualstudio.com](https://code.visualstudio.com)

# Roadmap

- [ ] Create custom gui in OpenGL (HIGH Priority)
- [ ] Build for MacOS and Linux amd64 (Low Priority)
- [ ] Add custom titlebar (Very Low Priority)

# Contributing

You can fork this repository and make any changes you want. If you have a suggestion that would make Valence better, then you open a pull request or open an Issue with the "enhancement" tag. To open a pull request, follow these steps:

1. Fork the project
2. Create a new branch with your enhancements.
3. Commit your changes
4. Push to the Branch
5. Now you can open a pull request under this repository. I will review your changes and merge it.

# License

This project is licensed under the MIT Licence. Read the [LICENSE](https://github.com/Ceres-Dev/Ceres/LICENSE) for more details

# Contact

- Anant Narayan - [anantnrg@gmail.com](mailto:anantnrg@gmail.com)

- Project Repository - [github.com/Ceres-Dev/Ceres](https://github.com/Ceres-Dev/Ceres)

- Project Site - [ceres.is-an.app](https://ceres.is-an.app)

- Project Organization - [github.com/Ceres-Dev/](https://github.com/Ceres-Dev/)
