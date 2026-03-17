pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('project') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Application') {
            steps {
                dir('project') {
                    sh 'node index.js'
                }
            }
        }

    }
}
