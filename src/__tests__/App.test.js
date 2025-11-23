import './test_suites/AllPlants.test'
import './test_suites/CreatePlant.test'
import './test_suites/InStock.test'
import './test_suites/SearchPlants.test'

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
