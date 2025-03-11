# Getting Started with WinSparkle Template

This guide will help you get started with creating a Windows desktop application that includes automatic update functionality using WinSparkle.

## Prerequisites

Before you begin, ensure you have the following installed:
- Visual Studio 2022 or later
- Windows SDK 10.0 or later
- CMake 3.14 or later (optional, for CMake build support)

## Creating a New Project

1. Open Visual Studio
2. Go to File > New > Project
3. Search for "WinSparkle" in the templates search box
4. Select "Windows Application with WinSparkle Updates"
5. Click Next
6. Enter your project details:
   - Project name
   - Location
   - Solution name
7. Click Create
8. In the configuration dialog:
   - Enter your company name
   - Enter your appcast domain (e.g., "updates.yourcompany.com")
9. Click OK

## Project Structure

Your new project will have the following structure:

```
YourProject/
├── cmake/                      # CMake modules
│   ├── FindWinSparkle.cmake   # WinSparkle finder module
│   └── WinSparkleConfig.cmake # WinSparkle integration module
├── appcast/                    # Update feed files
│   ├── appcast.xml           # Update feed template
│   └── README.md             # Appcast documentation
├── main.cpp                   # Main application source
├── Resource.rc               # Windows resources
├── CMakeLists.txt           # CMake build configuration
└── README.md                # Project documentation
```

## Building the Project

### Using Visual Studio

1. Open the solution
2. Select your desired configuration (Debug/Release)
3. Build the solution (F7)

### Using CMake

```bash
mkdir build
cd build
cmake ..
cmake --build . --config Release
```

## Setting Up Updates

1. Host the `appcast.xml` file from the `appcast` directory on your web server
2. Update the file with your application's information:
   - Version number
   - Release notes
   - Download URL
   - DSA signature
3. Build and sign your update package
4. Test the update process

## Next Steps

- Read the [WinSparkle documentation](https://github.com/vslavik/winsparkle/wiki)
- Learn about [DSA signatures](https://github.com/vslavik/winsparkle/wiki/DSA-Signatures)
- Customize the update UI
- Set up continuous integration

## Getting Help

- [Report issues](https://github.com/Tizzle716/winsparkle-template/issues)
- [WinSparkle discussions](https://github.com/vslavik/winsparkle/discussions)
- [Visual Studio extension development](https://docs.microsoft.com/en-us/visualstudio/extensibility/)