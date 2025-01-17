# app/api/endpoints/predict.py

from fastapi import APIRouter, HTTPException
from app.models.patien import PatientData
from app.services.prediction_service import predict_classification

router = APIRouter()

@router.post("/classification")
def predict_classification_endpoint(data: PatientData):
    try:
        predict = predict_classification(data)
        return predict
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )