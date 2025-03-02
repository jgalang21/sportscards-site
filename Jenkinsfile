pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World  - testing to see if this triggers pipeline!!!"'
                sh '''
                    echo "Multiline shell steps works too!!!! USING NGROK pls work"
                    ls -lah
                '''
            }
        }
    }
}