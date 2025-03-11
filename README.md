# WinSparkle Project Template

A project template for creating Windows desktop applications with integrated automatic updates using WinSparkle. Available for both Visual Studio and Cursor IDE.

## Features

- Automatic updates using WinSparkle
- CMake build system integration
- Cross-IDE support (Visual Studio and Cursor)
- Pre-configured update checking
- Sample appcast XML

## Installation

### Visual Studio

1. Download the VSIX package from the releases page
2. Double-click the VSIX file to install
3. Restart Visual Studio

### Cursor

1. Open Cursor IDE
2. Press `Ctrl+Shift+X` to open the Extensions view
3. Search for "WinSparkle Template"
4. Click Install
5. Restart Cursor

## Usage

### Visual Studio

1. File → New → Project
2. Search for "WinSparkle"
3. Select "WinSparkle Windows Application"
4. Follow the project creation wizard

### Cursor

1. Press `Ctrl+Shift+P` to open the Command Palette
2. Type "Create WinSparkle Project"
3. Follow the prompts to configure your project

## Project Structure

```
YourProject/
├── CMakeLists.txt           # CMake build configuration
├── main.cpp                 # Main application entry point
├── Resource.rc             # Windows resources
├── cmake/
│   ├── FindWinSparkle.cmake    # WinSparkle CMake module
│   └── WinSparkleConfig.cmake  # WinSparkle configuration
└── appcast/
    └── appcast.xml         # Sample appcast file
```

## Building

### Prerequisites

- CMake 3.15 or higher
- Visual Studio 2019 or higher / Cursor IDE
- WinSparkle SDK

### Build Steps

```bash
mkdir build
cd build
cmake ..
cmake --build .
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [WinSparkle](https://winsparkle.org/) - The update library
- Visual Studio SDK team
- Cursor IDE team