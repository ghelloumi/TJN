pipeline {
  agent any

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ghelloumi/TJN.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }


    stage('console log') {
          steps {
            sh 'npm install'
          }
        }

    stage('Test') {
      steps {
         sh 'npm test'
      }
    }
  }
}
