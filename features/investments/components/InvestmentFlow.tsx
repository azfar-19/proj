// InvestmentFlow Component

import React, { useState } from 'react';
import colors from '../../../design-system/tokens/colors';
import typography from '../../../design-system/tokens/typography';
import spacing from '../../../design-system/tokens/spacing';

interface InvestmentFlowProps {
  onConfirm: (amount: number, fundingMethod: string) => void;
}

const InvestmentFlow: React.FC<InvestmentFlowProps> = ({ onConfirm }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [fundingMethod, setFundingMethod] = useState('');

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    onConfirm(amount, fundingMethod);
  };

  return (
    <div style={{ padding: spacing.large, backgroundColor: colors.ivoryWhite, borderRadius: '8px' }}>
      {step === 1 && (
        <div>
          <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
            Step 1: Choose Investment Amount
          </h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            style={{ padding: '8px', borderRadius: '4px', border: `1px solid ${colors.midnightBlue}` }}
          />
          <button onClick={handleNext} style={{ marginTop: spacing.medium, padding: '8px 16px', backgroundColor: colors.champagneGold, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
            Step 2: Select Funding Method
          </h2>
          <select
            value={fundingMethod}
            onChange={(e) => setFundingMethod(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: `1px solid ${colors.midnightBlue}` }}
          >
            <option value="">Select a method</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Credit Card">Credit Card</option>
          </select>
          <div style={{ marginTop: spacing.medium }}>
            <button onClick={handleBack} style={{ marginRight: spacing.medium, padding: '8px 16px', backgroundColor: colors.midnightBlue, color: colors.ivoryWhite, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Back
            </button>
            <button onClick={handleNext} style={{ padding: '8px 16px', backgroundColor: colors.champagneGold, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
            Step 3: Confirm Subscription
          </h2>
          <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.medium }}>
            Amount: {amount}
          </p>
          <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.medium }}>
            Funding Method: {fundingMethod}
          </p>
          <div>
            <button onClick={handleBack} style={{ marginRight: spacing.medium, padding: '8px 16px', backgroundColor: colors.midnightBlue, color: colors.ivoryWhite, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Back
            </button>
            <button onClick={handleConfirm} style={{ padding: '8px 16px', backgroundColor: colors.champagneGold, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentFlow;