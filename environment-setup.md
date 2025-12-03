# Environment Setup – CPAN 213 Lab 1

## System Specifications

- **Device:** MacBook Pro (M2)
- **OS Version:** macOS 26.0.1 (25A362)
- **RAM:** 16GB
- **Storage Free:** ~20GB+ free space

## Software Versions Installed

- **Node.js:** v25.2.1
- **npm:** 11.6.2
- **React Native CLI:** @react-native-community/cli
- **Android Studio Version:** (fill from About Android Studio, e.g. "2024.1.1 Ladybug")
- **Xcode Version:** (fill from About Xcode, e.g. "16.1")
- **CocoaPods Version:** 1.16.2
- **VS Code Version:** 26.0.1

## Setup Steps I Followed

1. Installed Node.js LTS.
2. Verified Node and npm versions using:
   ```bash
   node --version
   npm --version
   ```
3. Installed the React Native CLI globally using:
   npm install -g @react-native-community/cli
4. Installed Android Studio and required SDK components:
   • Android SDK Platform 31
   • Android SDK Platform 33
   • Android SDK Build-Tools 33.0.0
   • Android Emulator
   • Android SDK Platform-Tools
5. Installed Xcode and Xcode Command Line Tools on macOS.
6. Installed CocoaPods using:
   sudo gem install cocoapods
7. Installed Visual Studio Code and useful extensions:
   • React Native Tools
   • ES7+ React/Redux/React-Native snippets
   • GitLens
8. Created the React Native project:
   npx react-native init EnviroTEST
9. Installed iOS dependencies with CocoaPods:
   cd ios
   pod install
   cd ..
10. Ran the app on the iOS simulator using:
    npx react-native run-ios
