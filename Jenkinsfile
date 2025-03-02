pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Beginning Pipeline...."'
                sh 'echo "Creating Docker container...."'
                sh 'docker build -t datajeremy/sports-card-site .'
                sh 'docker tag datajeremy/sports-card-site jgalang21/sports-site-repo'
                sh 'docker push jgalang21/sports-site-repo'
            }
        }
    }
}