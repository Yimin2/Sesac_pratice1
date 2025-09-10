# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Java practice project (`Sesac_pratice1`) built with Gradle. It's a simple educational project with basic Java structure for learning purposes.

## Project Structure

- `src/main/java/com/ll/` - Main Java source code (currently contains a simple Main class)
- `src/test/java/` - Test source code directory
- `build.gradle` - Gradle build configuration with JUnit 5 testing setup
- `settings.gradle` - Gradle settings (project name: Sesac_pratice1)

## Common Development Commands

### Build and Run
```bash
# Build the project
./gradlew build

# Run the main application
./gradlew run

# Clean build artifacts
./gradlew clean
```

### Testing
```bash
# Run all tests
./gradlew test

# Run tests with verbose output
./gradlew test --info
```

### Development
```bash
# Compile main classes only
./gradlew compileJava

# Compile test classes
./gradlew compileTestJava
```

## Dependencies and Configuration

- Java project using Gradle build system
- JUnit 5 platform configured for testing (`org.junit:junit-bom:5.9.1`)
- Maven Central repository configured for dependency resolution
- Group ID: `com.ll`, Version: `1.0-SNAPSHOT`

## Code Organization

The project follows standard Maven/Gradle directory structure with package `com.ll` as the base package for Java classes.