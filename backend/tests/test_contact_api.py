"""
Tests for Contact API endpoint - POST /api/contact
Tests contact form submission and message storage
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestContactAPI:
    """Contact form API tests"""
    
    def test_contact_submit_success(self):
        """Test successful contact form submission"""
        payload = {
            "name": "TEST_Jean Martin",
            "email": "jean.martin@test.com",
            "subject": "Demande d'information",
            "message": "Bonjour, je souhaite des informations sur les messes."
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        # Status assertion
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        # Data assertions
        data = response.json()
        assert "id" in data, "Response should contain 'id'"
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "created_at" in data
        assert data["read"] == False
        
        print(f"SUCCESS: Contact message created with id: {data['id']}")
    
    def test_contact_missing_name(self):
        """Test contact submission with missing name - should return validation error"""
        payload = {
            "email": "test@test.com",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        # Should return 422 for validation error
        assert response.status_code == 422, f"Expected 422 for missing name, got {response.status_code}"
        print("SUCCESS: Validation error returned for missing name")
    
    def test_contact_missing_email(self):
        """Test contact submission with missing email"""
        payload = {
            "name": "TEST_User",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422, f"Expected 422 for missing email, got {response.status_code}"
        print("SUCCESS: Validation error returned for missing email")
    
    def test_contact_missing_subject(self):
        """Test contact submission with missing subject"""
        payload = {
            "name": "TEST_User",
            "email": "test@test.com",
            "message": "Test message"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422, f"Expected 422 for missing subject, got {response.status_code}"
        print("SUCCESS: Validation error returned for missing subject")
    
    def test_contact_missing_message(self):
        """Test contact submission with missing message"""
        payload = {
            "name": "TEST_User",
            "email": "test@test.com",
            "subject": "Test Subject"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422, f"Expected 422 for missing message, got {response.status_code}"
        print("SUCCESS: Validation error returned for missing message")
    
    def test_contact_empty_body(self):
        """Test contact submission with empty body"""
        response = requests.post(f"{BASE_URL}/api/contact", json={})
        
        assert response.status_code == 422, f"Expected 422 for empty body, got {response.status_code}"
        print("SUCCESS: Validation error returned for empty body")


class TestAPIHealth:
    """Basic API health tests"""
    
    def test_api_root(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"SUCCESS: API root responded: {data['message']}")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
