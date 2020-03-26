import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
#list = [age,gender,diabetes patient, bp patient, chronic lung disease, other chronic disease]
list=[65,0,0,0,0,0]

dataset=pd.read_csv('riskfactor.csv')
X=dataset.iloc[:32,1:7].values
y=dataset.iloc[:32,7:8].values

#Feature Scaling
from sklearn.preprocessing import StandardScaler
sc_X= StandardScaler()
sc_y= StandardScaler()
X=sc_X.fit_transform(X)
y=sc_y.fit_transform(y)

from sklearn.svm import SVR
regressor =SVR(kernel='linear')
regressor.fit(X,y)

y_pred =sc_y.inverse_transform(regressor.predict(sc_X.transform(np.array([list]))))
