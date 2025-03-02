pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Beginning Pipeline...."'
                sh 'echo "Creating Docker container...."'
                sh 'docker build --target build -t datajeremy/sports-card-site .'

            }
        }
    }
}