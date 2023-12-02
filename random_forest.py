import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report
from imblearn.over_sampling import SMOTE


def main():
    x1 = pd.read_csv("./Ressources/Datasets/stand_norm_e1.txt", header=None, delimiter=" ")
    x2 = pd.read_csv("./Ressources/Datasets/stand_norm_e2.txt", header=None, delimiter=" ", names=[8, 9, 10, 11, 12, 13, 14])
    y = pd.read_csv("./Ressources/Datasets/y2_e1.txt", header=None, delimiter=" ", names=["label"])
    x = pd.concat([x1, x2], axis=1)
        

    # Splitting the dataset into training and test set.  
    x_train, x_test, y_train, y_test = train_test_split(x.values, y.values, test_size = 0.25, random_state=0)  

    # Feature Scaling
    # Ajuster la moyenne à 0 et l'écart-type à 1
    st_x = StandardScaler()    
    x_train = st_x.fit_transform(x_train)    
    x_test = st_x.transform(x_test)  

    print('Before SMOTE:', len(y_train))

    # Oversample to have same number of samples of each class
    smote = SMOTE()
    x_train_sampled, y_train_sampled = smote.fit_resample(x_train, y_train)

    print('After SMOTE:', len(y_train_sampled))

    # Fitting Decision Tree classifier to the training set   
    classifier = RandomForestClassifier(n_estimators= 20, criterion="entropy")  
    classifier.fit(x_train_sampled, y_train_sampled.ravel())     # ravel : aplatir un tableau Numpy unidimensionnel  

    # Predicting the test set result  
    y_pred = classifier.predict(x_test)  

    # Create confusion matrix
    cm = confusion_matrix(y_test, y_pred)
    cr = classification_report(y_test, y_pred)
    
    print(cr)
    print(cm)

    return None

if __name__ == '__main__':
    main()
